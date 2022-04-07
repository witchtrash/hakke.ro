import { WeeklyArtistChart } from 'models/last-fm';
import { NextApiRequest, NextApiResponse } from 'next';
import { fetch } from 'util/last-fm';
import { clientFactory } from 'util/supabase';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = clientFactory({ useServiceKey: true });

  const data = await fetch<WeeklyArtistChart>({
    method: 'user.getweeklyartistchart',
  });

  const response = await client.from('weekly_artists').insert(
    data.weeklyartistchart.artist.slice(0, 5).map(artist => {
      return {
        artist_name: artist.name,
        scrobble_count: artist.playcount,
        lastfm_url: artist.url,
      };
    })
  );

  if (response.status === 201) {
    res.status(204);
  } else {
    res.status(400).json({
      message: response.error?.message,
    });
  }

  res.end();
};

export default handler;
