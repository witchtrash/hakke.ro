import { NextRequest, NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
  const auth = req.headers.get('authorization');
  const token = process.env.SCRAPE_AUTHORIZATION;

  if (!token) {
    return new Response(
      JSON.stringify({ message: 'Missing SCRAPE_AUTHORIZATION.' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  if (!auth || auth !== token) {
    return new Response(
      JSON.stringify({ message: 'Authorization required.' }),
      {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  NextResponse.next();
};
