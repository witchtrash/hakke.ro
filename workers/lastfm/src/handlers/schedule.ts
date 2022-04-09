import { getResource } from '../util/api';
import { UserInfoDto, WeeklyArtistChartDto } from '../util/models';
import { Store } from '../util/store';

export const handleSchedule = async (
  event: ScheduledEvent
): Promise<Response> => {
  if (!LASTFM_TOKEN) {
    return new Response('LASTFM_TOKEN is not set.', {
      status: 500,
    });
  }

  if (!LASTFM_USER) {
    return new Response('LASTFM_USERNAME is not set', {
      status: 500,
    });
  }

  switch (event.cron) {
    case '*/5 * * * *':
      // Fetch scrobbleCount every 5 minutes
      await fetchScrobbleCount();
      break;
    case '20 4 * * *':
      // Fetch artist chart at 4:20 AM every day
      await fetchArtistChart();
      break;
  }

  return new Response('Done ^_^', {
    status: 201,
  });
};

const fetchScrobbleCount = async () => {
  const scrobbleCount = await getResource<UserInfoDto>({
    method: 'user.getInfo',
    user: LASTFM_USER,
    api_key: LASTFM_TOKEN,
  });

  await STATS.put(
    Store.SCROBBLE_COUNT,
    JSON.stringify(scrobbleCount.user.playcount)
  );
};

const fetchArtistChart = async () => {
  const weeklyArtists = await getResource<WeeklyArtistChartDto>({
    method: 'user.getweeklyartistchart',
    user: LASTFM_USER,
    api_key: LASTFM_TOKEN,
  });

  await STATS.put(
    Store.WEEKLY_ARTISTS,
    JSON.stringify(
      weeklyArtists.weeklyartistchart.artist.slice(0, 5).map(artist => {
        return {
          artistName: artist.name,
          url: artist.url,
          scrobbles: artist.playcount,
        };
      })
    )
  );
};
