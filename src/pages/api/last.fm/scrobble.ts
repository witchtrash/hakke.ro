import { NextApiRequest, NextApiResponse } from 'next';
import { fetch } from 'util/last-fm';
import { clientFactory } from 'util/supabase';
import { UserInfo } from 'models/last-fm';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = clientFactory({ useServiceKey: true });

  const data = await fetch<UserInfo>({ method: 'user.getInfo' });

  const response = await client.from('scrobbles').insert([
    {
      scrobble_count: data.user.playcount,
    },
  ]);

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
