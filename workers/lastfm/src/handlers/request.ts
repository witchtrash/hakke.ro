import { Store } from '../util/store';

export const handleRequest = async (): Promise<Response> => {
  const scrobbleCount = await STATS.get(Store.SCROBBLE_COUNT);
  const weeklyArtists = await STATS.get(Store.WEEKLY_ARTISTS);

  return new Response(
    JSON.stringify({
      scrobbleCount: JSON.parse(scrobbleCount ?? '0'),
      weeklyArtists: JSON.parse(weeklyArtists ?? '[]'),
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    }
  );
};
