import { Artist } from './types';

export const ARTISTS: Artist[] = [
  {
    id: 1,
    name: 'DJ Rodriz',
    tagline: 'DJ / Produtor',
    image: '/artists/djrodriz1.webp',
    logoUrl: '/logos/rodriz-logo.png',
    stats: {
      monthlyListeners: '180K ouvintes/mês',
      subscribers: '1.75K inscritos',
      views: '2M+ views',
    },
    // MODIFICADO: Links atualizados
    socials: {
      instagram: 'https://www.instagram.com/rodrizdj/?hl=pt-br',
      spotify: 'https://open.spotify.com/intl-pt/artist/3s085Y3JMDExHJiZzDxhUP',
      youtube: 'https://www.youtube.com/@djrodriz1',
      pressKit: 'https://drive.google.com/drive/folders/1hUcuHI1atpZjkxFklPqpAWP13L72G_hz',
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
    imageAlignment: 'object-top',
    logoUrl: '/logos/lucashenrique-logo.png',
    stats: {
      monthlyListeners: '64K ouvintes/mês',
      subscribers: '8.8K inscritos',
      views: '3M+ views',
    },
    // MODIFICADO: Links atualizados
    socials: {
      instagram: 'https://www.instagram.com/djlucashenrique_/',
      spotify: 'https://open.spotify.com/intl-pt/artist/0auLP5j5MbnqMRXmdlvub9',
      youtube: 'https://www.youtube.com/@djlucashenrique_',
      pressKit: 'https://drive.google.com/drive/folders/1U9HfflzFgRTDtt8ZQhDpstRn13qJ2-Wo',
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
    imageAlignment: 'object-top',
    logoUrl: '/logos/zatelli-logo.png',
    stats: {
      monthlyListeners: '5K ouvintes/mês',
      subscribers: '6.5K inscritos',
      views: '1.9M+ views',
    },
    // MODIFICADO: Links atualizados
    socials: {
      instagram: 'https://www.instagram.com/djzatelli/',
      spotify: 'https://open.spotify.com/intl-pt/artist/5WXA9QsuHzbaB696vr1Hkg',
      youtube: 'https://www.youtube.com/@DjZatelli',
      pressKit: 'https://drive.google.com/drive/folders/1Fb4X4gurVyg6SAw4vaLUMhWg1hFI2Ywk',
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
    imageAlignment: 'object-top',
    logoUrl: '/logos/diguera-logo.png',
    stats: {
      monthlyListeners: '10K ouvintes/mês',
      subscribers: '1.2K inscritos',
      views: '500K+ views',
    },
    // MODIFICADO: Links atualizados
    socials: {
      instagram: 'https://www.instagram.com/diguerabr/',
      spotify: 'https://open.spotify.com/intl-pt/artist/1CKoqzkaphGMIcHZ55JvvM',
      youtube: 'https://www.youtube.com/@digueraabr',
      pressKit: 'https://drive.google.com/drive/folders/1_sembv1xw4OESbCbJJVbKtU_dI8gbek-',
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
