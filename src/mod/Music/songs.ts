import different from './assets/covers/different.jpg';
import myVoice from './assets/covers/my_voice.jpg';
import iWould from './assets/covers/i_would_2.jpg';
import iWouldPiano from './assets/covers/i_would_piano.jpg';
import bomb from './assets/covers/bomb.jpg';
import iAmYours from './assets/covers/i_am_yours.jpg';
// import differentRockVersion from './assets/covers/different_rock_version.jpg';
// import mysticalMelody from './assets/covers/mystical_melody.jpg';
import galamha from './assets/covers/galamha.jpg';
import tatarGirl from './assets/covers/tatar_girl.jpg';

export interface Song {
  id: string;
  spotify: string;
  itunes: string;
  coverUrl: string;
  url: string;
  urlFreeDownload?: string;
  name: string;
}

export const songs: Song[] = [
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
    itunes: 'https://music.apple.com/us/album/my-voice-from-see-my-voice-single/1553789941',
    coverUrl: myVoice,
    url: '/songs/my_voice.mp3',
    urlFreeDownload: '/download_free/my_voice.mp3',
    name: 'My voice',
  },

  {
    id: 'iWould',
    spotify: 'https://open.spotify.com/album/4ZqxSKQ7yG8sS16gimiwy4',
    itunes: 'https://music.apple.com/us/album/i-would/1543774939?i=1543774941',
    coverUrl: iWould,
    url: '/songs/i_would.mp3',
    name: 'I would',
  },

  {
    id: 'iWouldPianoBalladVersion',
    spotify: 'https://open.spotify.com/album/28Na1niVu3g1pAxGQWqhvm',
    itunes: 'https://music.apple.com/us/album/i-would-piano-ballad-version-single/1551700063',
    coverUrl: iWouldPiano,
    url: '/songs/i_would_piano.mp3',
    name: 'I Would (Piano Ballad Version)',
  },

  {
    id: 'bomb',
    spotify: 'https://open.spotify.com/album/1Wteh2Cc2Lytd30aa5ZU08',
    // itunes: 'https://music.apple.com/us/album/bomb-single/1472177996',
    itunes: 'https://music.apple.com/us/album/bomb-single/1579621720',
    coverUrl: bomb,
    url: '/songs/bomb.mp3',
    name: 'bomb',
  },

  {
    id: 'i_am_yours',
    spotify: 'https://open.spotify.com/album/3piQPdOwEFGQjv9L2ixC9j',
    itunes: 'https://music.apple.com/us/album/im-yours-i-m-single/1579549542',
    // itunes: 'https://music.apple.com/us/album/im-yours-i-m/1471635967?i=1471635973',
    coverUrl: iAmYours,
    url: '/songs/i_am_yours.mp3',
    name: 'I am yours',
  },

  // {
  //   id: 'different_rock_version',
  //   spotify: 'https://open.spotify.com/album/3piQPdOwEFGQjv9L2ixC9j',
  //   itunes: 'https://music.apple.com/us/album/different-rock-version-single/1488744586',
  //   coverUrl: differentRockVersion,
  //   url: '/songs/different_rock_version.mp3',
  //   name: 'different rock version',
  // },

  // {
  //   id: 'mystical_melody',
  //   spotify: 'https://open.spotify.com/album/5kjFmRvfOtDGRP86jffkBG',
  //   itunes: 'https://music.apple.com/us/album/mystical-melody-feat-prince-dean-single/1511167483',
  //   coverUrl: mysticalMelody,
  //   url: '/songs/mystical_melody.mp3',
  //   name: 'Mystical Melody',
  // },

  {
    id: 'galamge',
    spotify: 'https://open.spotify.com/album/5qSf64epyvmpsxX8uCIx0D',
    itunes: 'https://music.apple.com/us/album/%D0%B3%D0%B0%D0%BB%D3%99%D0%BC%D0%B3%D3%99/1538749817',
    coverUrl: galamha,
    url: '',
    name: 'Mystical Melody',
  },
  {
    id: 'tatar_girl',
    spotify: 'https://open.spotify.com/album/2xzsmnTtPnx4KAeqstmebw',
    itunes: 'https://music.apple.com/us/album/tatar-girl/1549154358',
    coverUrl: tatarGirl,
    url: '',
    name: 'Tatar Girl',
  },
];

export function findUrl(id: string | null): string | null {
  if (!id) {
    return null;
  }

  const song = songs.find(it => it.id === id);

  return song ? song.url : null;
}
