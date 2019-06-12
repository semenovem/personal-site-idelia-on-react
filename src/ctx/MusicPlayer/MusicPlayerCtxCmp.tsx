import {IMusicPlayer, Status} from "types/player";
import React from "react";
import MusicPlayerCtx from "./MusicPlayerCtx";

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
        isPlay: this.handleIsPlay,
      }
    }
  }

  handlePlay = () => {
    this.setState({
      player: {
        ...this.state.player,
        status: Status.PLAY,
      }
    });
  };

  handlePause = () => {
    this.setState({
      player: {
        ...this.state.player,
        status: Status.PAUSE,
      }
    });
  };

  handleChange = (url: string | null) => {
    this.setState({
      player: {
        ...this.state.player,
        url,
        status: url ? Status.PLAY : Status.PAUSE,
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
