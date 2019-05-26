import React from 'react';

import { IMusicPlayer, Status } from 'types/player';


export interface IMusicPlayerProps {
  musicPlayer: IMusicPlayer
}

const musicPlayer: IMusicPlayer = {
  status: Status.PAUSE,
  play: () => {},
  pause: () => {},
  change: () => {},
  url: null,
};

const MusicPlayerCtx = React.createContext<IMusicPlayer>(musicPlayer);

export function withMusicPlayerCtx<T>(Component: any) {
  function MusicPlayerCtxCmp(props: T) {
    return (
      <MusicPlayerCtx.Consumer>
        {musicPlayer => <Component {...props} musicPlayer={musicPlayer} />}
      </MusicPlayerCtx.Consumer>
    );
  }

  MusicPlayerCtxCmp.displayName = `withOffTabIndexCtx(${Component.displayName || Component.name || 'Undefined'})`;

  return MusicPlayerCtxCmp;
}

export default MusicPlayerCtx;
