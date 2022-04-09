import { Store } from '../util/store';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS',
  'Access-Control-Max-Age': '86400',
};

export const handleRequest = async (request: Request): Promise<Response> => {
  if (request.method === 'OPTIONS') {
    return handleOptions(request);
  }

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
        ...corsHeaders,
      },
      status: 200,
    }
  );
};

const handleOptions = (request: Request) => {
  // Make sure the necessary headers are present
  // for this to be a valid pre-flight request
  const headers = request.headers;
  if (
    headers.get('Origin') !== null &&
    headers.get('Access-Control-Request-Method') !== null &&
    headers.get('Access-Control-Request-Headers') !== null
  ) {
    // Handle CORS pre-flight request.
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      headers: {
        Allow: 'GET, OPTIONS',
      },
      status: 204,
    });
  }
};
