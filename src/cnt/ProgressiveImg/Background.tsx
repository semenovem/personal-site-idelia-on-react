import React from 'react';

import { ICountdownProps, withCtxCountdown} from 'ctx/Countdown';
import {canBeUsed, IWinSizeProps, WinSize, withCtxWinSize} from 'ctx/WinSize';


import { IProgressiveImgProps} from "./types";

// TODO decide component props
export interface IOwnProps extends React.ComponentProps<any> {
  className?: string;
  children: React.ReactChild |  React.ReactChild[] | React.ReactChildren[];
}

type IProps = IOwnProps & IProgressiveImgProps & ICountdownProps & IWinSizeProps;


class Background extends React.Component<IProps> {
  private numOfCallbacks: number[] = [];
  private readonly ref: React.RefObject<HTMLDivElement>;

  // TODO found type for react inline style
  private style: any = {};

  constructor(props: IProps) {
    super(props);

    this.setCallback();
    this.ref = React.createRef<HTMLDivElement>();
  }

  public componentWillUnmount(): void {
    this.removeAllCallbacks();
  }

  private removeAllCallbacks() {
    this.numOfCallbacks.forEach(this.props.countdown.removeTask);
  }

  private setCallback() {
    const { countdown, winSize, params } = this.props;
    const w = Object.keys(params).reduce((acc, it) => canBeUsed(winSize, +it) ? it : acc, '');
    const tasks = params[w];

    if (!tasks) {
      return;
    }

    Object.keys(tasks)
      .forEach(lev => {
        this.numOfCallbacks.push(
          countdown.addTask(+lev, this.callback.bind(this, winSize, tasks[lev]))
        );
      });
  }

  private callback = (winSize: WinSize, url: string) => {
    if (this.props.winSize !== winSize) {
      return;
    }

    const el = document.createElement('IMG') as HTMLImageElement;
    el.src = url;
    el.style.position = 'absolute';

    el.onload = this.handleLoadImg;
    el.onerror = this.handleError;

    document.getElementById('preload-images')!.appendChild(el);

  };

  handleLoadImg = ({ target }: any) => {
    if (this.ref.current) {
      this.ref.current.style.backgroundImage = `url(${target.src})`;
      this.style = { backgroundImage: `url(${target.src})`};
    }

    target.remove();
  };

  handleError = ({ target }: any) => {
    debugger;

    // todo повторить попытку загрузки

    target.remove();
  };


  public render() {
    const { children, className, winSize, params, countdown, ...rest } = this.props;

    return <div className={className} ref={this.ref} style={this.style} {...rest}>{children}</div>;
  }
}

export default withCtxCountdown<IOwnProps & IProgressiveImgProps>(withCtxWinSize<IOwnProps>(Background));
