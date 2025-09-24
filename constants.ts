
import { Artist } from './types';

export const ARTISTS: Artist[] = [
  {
    id: 1,
    name: 'DJ Rodriz',
    tagline: 'DJ / Produtor',
    image: 'https://i.imgur.com/3Z3qY3c.png',
    logoUrl: '/logos/rodriz-logo.png', // Replace with actual logo URL
    stats: {
      monthlyListeners: '180K ouvintes/mês',
      subscribers: '1.75K inscritos',
      views: '2M+ views',
    },
    socials: {
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
    },
    heroVideo: '/videos/rodriz.mp4',
    topTracks: [
      { id: 1, title: 'Se Revela', artist: 'DJ Rodriz', duration: '3:30', coverArt: 'https://picsum.photos/seed/track1/100/100', explicit: false },
      { id: 2, title: 'Mega Joga a Xrc', artist: 'DJ Rodriz', duration: '2:38', coverArt: 'https://picsum.photos/seed/track2/100/100', explicit: true },
      { id: 3, title: 'Mega Vou te Botar', artist: 'DJ Rodriz', duration: '3:16', coverArt: 'https://picsum.photos/seed/track3/100/100', explicit: true },
      { id: 4, title: 'Mega Furdunço', artist: 'DJ Rodriz', duration: '2:55', coverArt: 'https://picsum.photos/seed/track4/100/100', explicit: true },
    ],
    videos: [
      { id: 1, title: 'Mega Dia de Plantão', thumbnail: 'https://picsum.photos/seed/video1/400/225', url: '#' },
      { id: 2, title: 'Live Set #1', thumbnail: 'https://picsum.photos/seed/video2/400/225', url: '#' },
    ],
  },
  {
    id: 2,
    name: 'DJ Lucas Henrique',
    tagline: 'DJ / Produtor',
    image: 'https://i.imgur.com/dEa8X4E.png',
    logoUrl: '/logos/lucashenrique-logo.png',
    stats: {
      monthlyListeners: '64K ouvintes/mês',
      subscribers: '8.8K inscritos',
      views: '3M+ views',
    },
    socials: {
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
    },
    heroVideo: '/videos/lucashenrique.mp4',
    topTracks: [
        { id: 1, title: 'Midnight Drive', artist: 'DJ Lucas Henrique', duration: '4:15', coverArt: 'https://picsum.photos/seed/track5/100/100', explicit: false },
        { id: 2, title: 'City Lights', artist: 'DJ Lucas Henrique', duration: '3:50', coverArt: 'https://picsum.photos/seed/track6/100/100', explicit: false },
    ],
    videos: [
      { id: 1, title: 'Downtown Mix', thumbnail: 'https://picsum.photos/seed/video3/400/225', url: '#' },
    ],
  },
  {
    id: 3,
    name: 'DJ Zatelli',
    tagline: 'DJ / Produtor',
    image: 'https://i.imgur.com/z4b7G7A.png',
    logoUrl: 'https://i.imgur.com/example-logo-3.png',
    stats: {
      monthlyListeners: '5K ouvintes/mês',
      subscribers: '6.5K inscritos',
      views: '1.9M+ views',
    },
    socials: {
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
    },
    heroVideo: '/videos/zatelli.mp4',
    topTracks: [
        { id: 1, title: 'Warehouse Rave', artist: 'DJ Zatelli', duration: '5:02', coverArt: 'https://picsum.photos/seed/track7/100/100', explicit: true },
        { id: 2, title: 'Sunrise Groove', artist: 'DJ Zatelli', duration: '4:30', coverArt: 'https://picsum.photos/seed/track8/100/100', explicit: false },
    ],
    videos: [
      { id: 1, title: 'Boiler Room Set', thumbnail: 'https://picsum.photos/seed/video4/400/225', url: '#' },
    ],
  },
];
