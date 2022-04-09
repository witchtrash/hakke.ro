export const getResource = async <T>({
  method,
  user,
  api_key,
}: {
  method: string;
  user: string;
  api_key: string;
}) => {
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

  const response = await fetch(url + query, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return await response.json<T>();
};
