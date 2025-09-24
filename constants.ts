import { Artist } from './types';

export const ARTISTS: Artist[] = [
  {
    id: 1,
    name: 'DJ Rodriz',
    tagline: 'DJ / Produtor',
    image: '/artists/djrodriz1.webp',
    // Nenhuma alteração aqui, o padrão (centro) funciona bem.
    logoUrl: '/logos/rodriz-logo.png',
    stats: {
      monthlyListeners: '180K ouvintes/mês',
      subscribers: '1.75K inscritos',
      views: '2M+ views',
    },
    // ... restante das propriedades
    socials: {
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
    },
    heroVideo: '/videos/rodriz.mp4',
    topTracks: [
      { id: 1, title: 'Se Revela', artist: 'DJ Rodriz', duration: '3:30', coverArt: 'https://picsum.photos/seed/track1/100/100', explicit: false },
      { id: 2, title: 'Mega Joga a Xrc', artist: 'DJ Rodriz', duration: '2:38', coverArt: 'https://picsum.photos/seed/track2/100/100', explicit: true },
    ],
    videos: [
      { id: 1, title: 'Mega Dia de Plantão', thumbnail: 'https://picsum.photos/seed/video1/400/225', url: '#' },
    ],
  },
  {
    id: 2,
    name: 'DJ Lucas Henrique',
    tagline: 'DJ / Produtor',
    image: '/artists/djlucashenrique1.webp',
    // MODIFICADO: Adicionamos o alinhamento pelo topo
    imageAlignment: 'object-top',
    logoUrl: '/logos/lucashenrique-logo.png',
    stats: {
      monthlyListeners: '64K ouvintes/mês',
      subscribers: '8.8K inscritos',
      views: '3M+ views',
    },
    // ... restante das propriedades
    socials: {
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
    },
    heroVideo: '/videos/lucashenrique.mp4',
    topTracks: [
        { id: 1, title: 'Midnight Drive', artist: 'DJ Lucas Henrique', duration: '4:15', coverArt: 'https://picsum.photos/seed/track5/100/100', explicit: false },
    ],
    videos: [
      { id: 1, title: 'Downtown Mix', thumbnail: 'https://picsum.photos/seed/video3/400/225', url: '#' },
    ],
  },
  {
    id: 3,
    name: 'DJ Zatelli',
    tagline: 'DJ / Produtor',
    image: '/artists/djzatelli1.webp',
    // MODIFICADO: Adicionamos o alinhamento pelo topo
    imageAlignment: 'object-top',
    logoUrl: '/logos/zatelli-logo.png',
    stats: {
      monthlyListeners: '5K ouvintes/mês',
      subscribers: '6.5K inscritos',
      views: '1.9M+ views',
    },
    // ... restante das propriedades
    socials: {
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
    },
    heroVideo: '/videos/zatelli.mp4',
    topTracks: [
        { id: 1, title: 'Warehouse Rave', artist: 'DJ Zatelli', duration: '5:02', coverArt: 'https://picsum.photos/seed/track7/100/100', explicit: true },
    ],
    videos: [
      { id: 1, title: 'Boiler Room Set', thumbnail: 'https://picsum.photos/seed/video4/400/225', url: '#' },
    ],
  },
  {
    id: 4,
    name: 'DJ Diguera',
    tagline: 'DJ / Produtor',
    image: '/artists/djdiguera1.webp',
    // MODIFICADO: Adicionamos o alinhamento pelo topo
    imageAlignment: 'object-top',
    logoUrl: '/logos/diguera-logo.png',
    stats: {
      monthlyListeners: '10K ouvintes/mês',
      subscribers: '1.2K inscritos',
      views: '500K+ views',
    },
    // ... restante das propriedades
    socials: {
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
    },
    heroVideo: '/videos/diguera.mp4',
    topTracks: [
        { id: 1, title: 'Faixa do Diguera', artist: 'DJ Diguera', duration: '3:00', coverArt: 'https://picsum.photos/seed/track9/100/100', explicit: false },
    ],
    videos: [
      { id: 1, title: 'Set do Diguera', thumbnail: 'https://picsum.photos/seed/video5/400/225', url: '#' },
    ],
  },
];
