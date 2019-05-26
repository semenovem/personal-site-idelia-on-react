import React from 'react';
import App2 from './App2';

import MusicPlayerCtx from 'ctx/MusicPlayer';

import { Status, IMusicPlayer} from "types/player";

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
    debugger;
  };

  handlePause = () => {
    debugger;
  };

  handleChange = () => {
    debugger;
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
