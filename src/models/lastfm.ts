interface Artist {
  artistName: string;
  url: string;
  scrobbles: number;
}

export interface Stats {
  scrobbleCount: number;
  weeklyArtists: Artist[];
}
