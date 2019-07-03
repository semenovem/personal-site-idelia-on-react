import React from 'react';
import { WinSize } from './types';
import { defWinSize } from './utils';
import WinSizeCtx from './WinSizeCtx';

interface Props {}

interface State {
  winSize: WinSize;
}

const DELAY_RESIZE = 100;

class WinSizeCtxCmp extends React.Component<Props, State> {
  public state = {
    winSize: defWinSize(window.innerWidth),
  };

  private resizeTimer: number | null = null;
  private resizeLast: number = 0;

  public constructor(props: Props) {
    super(props);
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

  private resizeCallback(t: number) {
    this.resizeTimer = window.setTimeout(this.resizeCheckAct, t) as number;
  }

  public render() {
    return (
      <WinSizeCtx.Provider value={this.state.winSize}>{this.props.children}</WinSizeCtx.Provider>
    );
  }
}

export default WinSizeCtxCmp;
