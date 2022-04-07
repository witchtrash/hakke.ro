interface ArtistDto {
  mbid: string;
  url: string;
  name: string;
  '@attr': {
    rank: number;
  };
  playcount: number;
}

export interface WeeklyArtistChartDto {
  weeklyartistchart: {
    artist: ArtistDto[];
    '@attr': {
      from: number;
      to: number;
      user: string;
    };
  };
}

export interface UserInfoDto {
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
