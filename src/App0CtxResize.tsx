import React from 'react';

import App1CtxMusicPlayer from './App1CtxMusicPlayer';

import WinSizeCtx from 'ctx/WinSize';
import WinSize, { defWinSize } from 'types/WinSize';


interface IState {
  winSize: WinSize,
}

const DELAY_RESIZE = 100;

class App0CtxResize extends React.Component<{}, IState> {
  public state = {
    winSize: defWinSize(window.innerWidth),
  };

  private resizeTimer: number | null = null;
  private resizeLast: number = 0;

  public componentWillMount() {
    window.addEventListener('resize', this.handleResize);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }
  }

  private handleResize = () => {
    this.resizeLast = Date.now() + DELAY_RESIZE;

    if (!this.resizeTimer) {
      this.resizeCallback(DELAY_RESIZE);
    }
  };


  private resizeCallback(t: number) {
    this.resizeTimer = window.setTimeout(this.resizeCheckAct, t) as number;
  }

  private resizeCheckAct = () => {
    const t = Date.now();
    if (t < this.resizeLast) {
      this.resizeCallback(t - this.resizeLast);
      return;
    }
    this.resizeTimer = null;

    const winSize = defWinSize(window.innerWidth);

    if (this.state.winSize !== winSize) {
      this.setState({
        winSize,
      });
    }
  };

  render() {
    const {winSize } = this.state;

    return (
      <WinSizeCtx.Provider value={winSize}>
        <App1CtxMusicPlayer />
      </WinSizeCtx.Provider>
    );
  }
}

export default App0CtxResize;
