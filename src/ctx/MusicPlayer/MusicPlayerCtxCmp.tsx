import { MusicPlayer, Status } from 'types/player';
import React from 'react';
import MusicPlayerCtx from './MusicPlayerCtx';
import {
  addEventListenerPause,
  addEventListenerPlay,
  removeEventListenerPause,
  removeEventListenerPlay,
} from './control';

interface Props {}

interface State {
  player: MusicPlayer;
}

class MusicPlayerCtxCmp extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      player: {
        status: Status.PAUSE,
        play: this.handlePlay,
        pause: this.handlePause,
        change: this.handleChange,
        url: null,
        isPlay: false,
      },
    };

    addEventListenerPlay(this.handlePlay);
    addEventListenerPause(this.handlePause);
  }

  public componentWillUnmount(): void {
    removeEventListenerPlay(this.handlePlay);
    removeEventListenerPause(this.handlePause);
  }

  private handlePlay = () => {
    const { player } = this.state;

    this.setState({
      player: {
        ...player,
        status: Status.PLAY,
        isPlay: true,
      },
    });
  };

  private handlePause = () => {
    const { player } = this.state;

    this.setState({
      player: {
        ...player,
        status: Status.PAUSE,
        isPlay: false,
      },
    });
  };

  private handleChange = (url: string | null) => {
    const { player } = this.state;

    this.setState({
      player: {
        ...player,
        url,
        status: url ? Status.PLAY : Status.PAUSE,
        isPlay: !!url,
      },
    });
  };

  private handleIsPlay = () => this.state.player.status === Status.PLAY;

  public render() {
    const { player } = this.state;

    return <MusicPlayerCtx.Provider value={player}>{this.props.children}</MusicPlayerCtx.Provider>;
  }
}

export default MusicPlayerCtxCmp;
