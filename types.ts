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
  // NOVO: Adicionados campos para os embeds
  spotifyEmbedUrl: string;
  youtubeEmbedUrl: string;
  // REMOVIDO: topTracks e videos não são mais necessários
}