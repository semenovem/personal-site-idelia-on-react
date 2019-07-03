import different from './assets/covers/different.jpg';
import myVoice from './assets/covers/my_voice.jpg';
import iWould from './assets/covers/i_would.jpg';
import bomb from './assets/covers/bomb.jpg';
import iAmYours from './assets/covers/i_am_yours.jpg';

export interface ISong {
  id: string;
  spotify: string;
  itunes: string;
  coverUrl: string;
  url: string;
  name: string;
}

export const songs: ISong[] = [
  {
    id: 'different',
    spotify: 'https://open.spotify.com/album/4VY70aiWv6YMzJeCIBBVF1',
    itunes: 'https://music.apple.com/us/album/different/1443586279?i=1443586280',
    coverUrl: different,
    url: '/songs/different.mp3',
    name: 'different',
  },
  {
    id: 'myVoice',
    spotify: 'https://open.spotify.com/album/3SOvjES7pbP2ovIduUHD8w',
    itunes: 'https://music.apple.com/us/album/my-voice-from-see-my-voice/1447994568?i=1447994576',
    coverUrl: myVoice,
    url: '/songs/my_voice.mp3',
    name: 'my voice',
  },

  {
    id: 'iWould',
    spotify: '',
    itunes: '',
    coverUrl: iWould,
    url: '/songs/i_would.mp3',
    name: 'i would',
  },

  {
    id: 'bomb',
    spotify: '',
    itunes: '',
    coverUrl: bomb,
    url: '/songs/bomb.mp3',
    name: 'bomb',
  },

  {
    id: 'i_am_yours',
    spotify: '',
    itunes: '',
    coverUrl: iAmYours,
    url: '/songs/i_am_yours.mp3',
    name: 'i am yours',
  },
];

export function findUrl(id: string | null): string | null {
  if (!id) { return null; }

  const song = songs.find(it => it.id === id);

  return song ? song.url : null;
}
