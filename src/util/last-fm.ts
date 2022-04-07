import got from 'got';

export const fetch = <T>({ method }: { method: string }) => {
  const api_key = process.env.LASTFM_API_TOKEN;
  const user = process.env.LASTFM_USERNAME;

  if (!api_key) {
    throw Error('LASTFM_API_TOKEN is not set.');
  }

  if (!user) {
    throw Error('LASTFM_USERNAME is not set.');
  }

  const url = 'https://ws.audioscrobbler.com/2.0/?';
  const params: Record<string, string> = {
    method,
    user,
    api_key,
    format: 'json',
  };

  const query = Object.entries(params)
    .map(x => x.map(encodeURIComponent).join('='))
    .join('&');

  return got(url + query).json<T>();
};
