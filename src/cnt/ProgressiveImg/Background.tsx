import React from 'react';

import { CountdownProps, withCtxCountdown } from 'ctx/Countdown';
import { canBeUsed, WinSizeProps, WinSize, withCtxWinSize } from 'ctx/WinSize';

import { ProgressiveImgProps } from './types';

// TODO decide component props
export interface OwnProps extends React.ComponentProps<any> {
  className?: string;
  children?: React.ReactChild | React.ReactChild[] | React.ReactChildren[];
}

type Props = OwnProps & ProgressiveImgProps & CountdownProps & WinSizeProps;

class Background extends React.Component<Props> {
  private numOfCallbacks: number[] = [];
  private style: any = {};

  private readonly ref: React.RefObject<HTMLDivElement>;

  // TODO found type for react inline style

  public constructor(props: Props) {
    super(props);

    this.setCallback();
    this.ref = React.createRef<HTMLDivElement>();
  }

  public componentDidUpdate(prevPros: Props): void {
    const { winSize } = this.props;

    // for resize window
    if (winSize !== prevPros.winSize) {
      this.setCallback();
    }
  }

  public componentWillUnmount(): void {
    this.removeAllCallbacks();
  }

  private removeAllCallbacks() {
    this.numOfCallbacks.forEach(this.props.countdown.removeTask);
  }

  private setCallback() {
    const { countdown, winSize, params } = this.props;
    const w = Object.keys(params).reduce((acc, it) => (canBeUsed(winSize, +it) ? it : acc), '');
    const tasks = params[w];

    if (!tasks) {
      return;
    }

    Object.keys(tasks).forEach(lev => {
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
    el.onload = this.handleLoadImg.bind(this, url);
    el.onerror = this.handleError;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('preload-images')!.appendChild(el);
  };

  private handleLoadImg = (url: string, { target }: any) => {
    if (this.ref.current) {
      this.ref.current.style.backgroundImage = `url(${url})`;
      this.style = { backgroundImage: `url(${url})` };
    }
    target.remove();
  };

  private handleError = ({ target }: any) => {
    // todo retry attempt downloading image
    target.remove();
  };

  public render() {
    const { children, className, winSize, params, countdown, ...rest } = this.props;

    return (
      <div className={className} ref={this.ref} style={this.style} {...rest}>
        {children}
      </div>
    );
  }
}

export default withCtxCountdown<OwnProps & ProgressiveImgProps>(
  withCtxWinSize<OwnProps>(Background)
);
