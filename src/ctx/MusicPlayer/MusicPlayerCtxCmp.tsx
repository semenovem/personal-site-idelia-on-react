import {IMusicPlayer, Status} from "types/player";
import React from "react";
import MusicPlayerCtx from "./MusicPlayerCtx";
import { addEventListenerPause, addEventListenerPlay, removeEventListenerPause, removeEventListenerPlay} from './control';

type IProps = {}

interface IState {
  player: IMusicPlayer,
}

class MusicPlayerCtxCmp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      player: {
        status: Status.PAUSE,
        play: this.handlePlay,
        pause: this.handlePause,
        change: this.handleChange,
        url: null,
        isPlay: false,
      }
    };

    addEventListenerPlay(this.handlePlay);
    addEventListenerPause(this.handlePause);
  }

  public componentWillUnmount(): void {
    removeEventListenerPlay(this.handlePlay);
    removeEventListenerPause(this.handlePause);
  }

  handlePlay = () => {
    this.setState({
      player: {
        ...this.state.player,
        status: Status.PLAY,
        isPlay: true,
      }
    });
  };

  handlePause = () => {
    this.setState({
      player: {
        ...this.state.player,
        status: Status.PAUSE,
        isPlay: false,
      }
    });
  };

  handleChange = (url: string | null) => {
    this.setState({
      player: {
        ...this.state.player,
        url,
        status: url ? Status.PLAY : Status.PAUSE,
        isPlay: !!url,
      }
    });
  };

  handleIsPlay = () => this.state.player.status === Status.PLAY;

  render() {
    const { player } = this.state;

    return (
      <MusicPlayerCtx.Provider value={player}>
        {this.props.children}
      </MusicPlayerCtx.Provider>
    );
  }
}

export default MusicPlayerCtxCmp;
