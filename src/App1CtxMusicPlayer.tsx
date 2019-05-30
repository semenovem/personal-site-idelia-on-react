import React from 'react';
import App2 from './App2';

import MusicPlayerCtx from 'ctx/MusicPlayer';

import {IMusicPlayer, Status} from "types/player";

interface IProps {}

interface IState {
  player: IMusicPlayer,
}

class App1CtxMusicPlayer extends React.Component<{}, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      player: {
        status: Status.PAUSE,
        play: this.handlePlay,
        pause: this.handlePause,
        change: this.handleChange,
        url: null,
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


  render() {
    const { player } = this.state;

    return (
      <MusicPlayerCtx.Provider value={player}>
        <App2 />
      </MusicPlayerCtx.Provider>
    );
  }
}

export default App1CtxMusicPlayer;
