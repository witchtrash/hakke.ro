import { createClient } from '@supabase/supabase-js';

export const clientFactory = ({
  useServiceKey,
}: {
  useServiceKey?: boolean;
}) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!supabaseUrl) {
    throw Error('NEXT_PUBLIC_SUPABASE_URL is not set.');
  }

  const key = useServiceKey
    ? process.env.SUPABASE_SERVICE_KEY
    : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!key) {
    throw Error(
      'NEXT_PUBLIC_SUPABASE_ANON_KEY or SUPABASE_SERVICE_KEY is not set.'
    );
  }

  return createClient(supabaseUrl, key);
};
