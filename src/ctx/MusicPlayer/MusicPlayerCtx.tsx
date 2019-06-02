import React from 'react';

import { IMusicPlayer, Status } from 'types/player';

const musicPlayerCtx: IMusicPlayer = {
  status: Status.PAUSE,
  play: () => {},
  pause: () => {},
  change: () => {},
  isPlay: () => false,
  url: null,
};

const MusicPlayerCtx = React.createContext<IMusicPlayer>(musicPlayerCtx);

export default MusicPlayerCtx;
