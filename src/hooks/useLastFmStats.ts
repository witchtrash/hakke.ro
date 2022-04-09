import useSWR from 'swr';
import { Stats } from 'models/lastfm';

export const useLastFmStats = () => {
  const { data, error } = useSWR<Stats>('https://lastfm.dewdrop.workers.dev/');

  return {
    stats: data,
    isLoading: !error && !data,
    isError: error,
  };
};
