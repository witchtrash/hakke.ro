interface Artist {
  mbid: string;
  url: string;
  name: string;
  '@attr': {
    rank: number;
  };
  playcount: number;
}

export interface WeeklyArtistChart {
  weeklyartistchart: {
    artist: Artist[];
    '@attr': {
      from: number;
      to: number;
      user: string;
    };
  };
}

export interface UserInfo {
  user: {
    country: string;
    age: number;
    playcount: number;
    subscribers: NamedCurve;
    realname: string;
    playlists: number;
    bootstrap: number;
    image: {
      size: 'small' | 'medium' | 'large';
      '#text': string;
    }[];
    registered: {
      unixtime: number;
      '#text': number;
    };
    url: string;
    name: string;
    type: string;
  };
}
