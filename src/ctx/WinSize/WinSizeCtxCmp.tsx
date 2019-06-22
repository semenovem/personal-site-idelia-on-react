import { WinSize } from "./types";
import { defWinSize } from "./utils";
import React from "react";
import WinSizeCtx from "./WinSizeCtx";

type IProps = {}

interface IState {
  winSize: WinSize,
}

const DELAY_RESIZE = 100;

class WinSizeCtxCmp extends React.Component<IProps, IState> {
  public state = {
    winSize: defWinSize(window.innerWidth),
  };

  constructor(props: IProps) {
    super(props);
    window.addEventListener('resize', this.handleResize);
  }

  private resizeTimer: number | null = null;
  private resizeLast: number = 0;


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
    return (
      <WinSizeCtx.Provider value={this.state.winSize}>
        {this.props.children}
      </WinSizeCtx.Provider>
    );
  }
}

export default WinSizeCtxCmp;
