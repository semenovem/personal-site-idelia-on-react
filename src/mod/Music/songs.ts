import different from './assets/covers/different.jpg';
import myVoice from './assets/covers/my_voice.jpg';

// import fff from './assets/songs/tm_5.mp3';

// import fff from '../../../assets/songs/different.mp3';

// import musDifferent from 'assets/songs/tm_5.mp3';
// import musMyVoice from './assets/songs/tm_7.mp3';


export interface ISong {
  id: string;
  spotify: string;
  itunes: string;
  coverUrl: string;
  url: string;
}

export interface ISongs {
  different: ISong,
  myVoice: ISong;
}

export const songs: ISongs = {
  different: {
    id: 'different',
    spotify: 'https://open.spotify.com/album/4VY70aiWv6YMzJeCIBBVF1',
    itunes: 'https://music.apple.com/us/album/different/1443586279?i=1443586280',
    coverUrl: different,
    url: 'musDifferent',
  },

  myVoice: {
    id: 'myVoice',
    spotify: 'https://open.spotify.com/album/3SOvjES7pbP2ovIduUHD8w',
    itunes: 'https://music.apple.com/us/album/my-voice-from-see-my-voice/1447994568?i=1447994576',
    coverUrl: myVoice,
    url: 'musMyVoice'
  },
};
