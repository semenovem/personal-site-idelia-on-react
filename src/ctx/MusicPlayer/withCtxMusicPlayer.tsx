import React from "react";
import MusicPlayerCtx from "./MusicPlayerCtx";

function withCtxMusicPlayer<T>(Component: any) {
  function MusicPlayerCtxCmp(props: T) {
    return (
      <MusicPlayerCtx.Consumer>
        {musicPlayer => <Component {...props} musicPlayer={musicPlayer} />}
      </MusicPlayerCtx.Consumer>
    );
  }

  MusicPlayerCtxCmp.displayName = `withMusicPlayerCtx(${Component.displayName || Component.name || 'Undefined'})`;

  return MusicPlayerCtxCmp;
}

export default withCtxMusicPlayer;
