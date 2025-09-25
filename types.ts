export interface Artist {
  id: number;
  name: string;
  tagline: string;
  image: string;
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
    youtube: string;
    pressKit: string;
  };
  heroVideo: string;
  spotifyEmbedUrl: string;
  youtubeEmbedUrl: string;
  // NOVO: Adicionado campo para a biografia
  bio: string;
}