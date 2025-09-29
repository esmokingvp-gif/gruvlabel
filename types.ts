export interface Artist {
  id: number;
  slug: string; // Adicionado para a URL
  name: string;
  tagline: string;
  image: string;
  imageAlignment?: string;
  logoUrl: string;
  socials: {
    instagram: string;
    spotify: string;
    youtube: string;
    pressKit: string;
  };
  heroVideo: string;
  spotifyEmbedUrl: string;
  youtubeEmbedUrl: string;
  bio: string;
}
