import React from 'react';

import { MusicPlayer, Status } from 'types/player';

const musicPlayerCtx: MusicPlayer = {
  status: Status.PAUSE,
  play: () => {},
  pause: () => {},
  change: () => {},
  isPlay: false,
  url: null,
};

const MusicPlayerCtx = React.createContext<MusicPlayer>(musicPlayerCtx);

export default MusicPlayerCtx;
