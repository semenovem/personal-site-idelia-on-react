import React from 'react';

import { isPreRendering } from 'sys/prerender';

import CountdownCtx from './CountdownCtx';
import { CountdownLevel, Countdown } from './types';
import { getNext } from './utils';

class CountdownCtxCmp extends React.Component<{}> {
  /**
   * for manipulating with <body class="... hide-elem-before-critical">
   * when the level, the class is removed
   */
  private static cssCls = {
    [CountdownLevel.CRITICAL]: 'hide-elem-before-critical',
    // not yet used
    // [CountdownLevel.IMPORTANT]: 'hide-elem-before-important',
  };

  // eslint-disable-next-line react/sort-comp
  private readonly countdown: Countdown;

  /**
   * Get current level of countdown
   */
  private level: CountdownLevel = CountdownLevel.CORE;

  private numCallback: number = 0;

  private callbacks: {
    l: CountdownLevel;
    n: number;
    fn: (currentLevel: CountdownLevel) => void;
  }[] = [];

  public constructor(props: {}) {
    super(props);

    this.countdown = {
      getLevel: this.getLevel,

      // for not user browser, example server side or pre-rendering - not execute callbacks
      addTask: !isPreRendering() ? this.addTask : () => 0,
      removeTask: this.removeTask,
    };

    setTimeout(this.nextLevel, 500); // for critical
    setTimeout(this.nextLevel, 1000);
    setTimeout(this.nextLevel, 2000);
    setTimeout(this.nextLevel, 4000);
    setTimeout(this.nextLevel, 6000);
  }
  private getLevel: Countdown['getLevel'] = () => this.level;

  private addTask: Countdown['addTask'] = (level, callback): number => {
    if (level <= this.level) {
      setTimeout(() => {
        callback(this.level);
      }, 1);
      return 0;
    }

    this.callbacks.push({
      l: level,
      n: this.numCallback++,
      fn: callback,
    });

    return this.numCallback;
  };

  private removeTask: Countdown['removeTask'] = (numCallback: number): void => {
    this.callbacks = this.callbacks.filter(it => it.n !== numCallback);
  };

  private runCallbacks = () => {
    this.callbacks = this.callbacks.filter(it => {
      if (it.l > this.level) {
        return true;
      }

      it.fn(this.level);
      return false;
    });
  };

  private nextLevel = () => {
    const nextLevel = getNext(this.level);

    if (!nextLevel) {
      return;
    }

    this.level = nextLevel;

    window.requestAnimationFrame(this.runCallbacks);

    // @ts-ignore
    const cssCls = CountdownCtxCmp.cssCls[nextLevel];
    if (cssCls) {
      document.body.classList.remove(cssCls);
    }
  };

  public render() {
    return (
      <CountdownCtx.Provider value={this.countdown}>{this.props.children}</CountdownCtx.Provider>
    );
  }
}

export default CountdownCtxCmp;
