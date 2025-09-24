// Definições de tipo para o seu projeto
export interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  coverArt: string;
  explicit: boolean;
}

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
}

export interface Artist {
  id: number;
  name: string;
  tagline: string;
  image: string;
  // NOVO: Propriedade opcional para alinhar a imagem do card
  imageAlignment?: string;
  logoUrl: string;
  stats: {
    monthlyListeners: string;
    subscribers: string;
    views: string;
  };
  socials: {
    instagram: string;
    spotify: string;
    appleMusic: string;
  };
  heroVideo: string;
  topTracks: Track[];
  videos: Video[];
}
