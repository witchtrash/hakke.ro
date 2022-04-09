import ky from 'ky';

export const fetcher = <T>(url: string) => ky.get(url).json<T>();
