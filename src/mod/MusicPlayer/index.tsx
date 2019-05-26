import React from 'react';
import cn from 'classnames';

import { withOffTabIndexCtx, IOffTabIndex } from 'ctx/OffTabIndex';
import { withMusicPlayerCtx, IMusicPlayerProps } from 'ctx/MusicPlayer';

// import musDifferent from 'assets/songs/tm_7_2.mp3';


import css from './style.module.css';

interface IOwnProps {}

interface IProps extends IOwnProps, IOffTabIndex, IMusicPlayerProps {}

interface IState {
  playedSongId: string | null;
}

class Music extends React.Component<IProps, IState> {
  state = {
    playedSongId: null,
  };

  public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    const { offTabIndex } = this.props;
    const { playedSongId } = this.state;
    return nextProps.offTabIndex !== offTabIndex || nextState.playedSongId !== playedSongId;
  }


  public render() {
    const { musicPlayer } = this.props;

    return (
      <div className={css.musicPlayer}>
        <audio controls className={cn(css.controls)}>
          <source src={musicPlayer.url || ''} type="audio/mpeg"/>
            {/*<source src="myAudio.ogg" type="audio/ogg"/>*/}
        </audio>
      </div>
    );
  }
}

export default withMusicPlayerCtx(withOffTabIndexCtx(Music));
