import React from "react";
import CountdownCtx from "./CountdownCtx";
import {CountdownLevel, ICountdown} from './types';
import {getNext} from './utils';

class CountdownCtxCmp extends React.Component<{}> {
  constructor(props: {}) {
    super(props);

    this.countdown = {
      getLevel: this.getLevel,
      addTask: this.addTask,
      removeTask: this.removeTask,
    };

    setTimeout(this.nextLevel, 500);  // for critical
    setTimeout(this.nextLevel, 1000);
    setTimeout(this.nextLevel, 2000);
    setTimeout(this.nextLevel, 4000);
    setTimeout(this.nextLevel, 6000);
  }

  countdown: ICountdown;

  /**
   * Get current level of countdown
   */
  private level: CountdownLevel = CountdownLevel.CORE;
  private numCallback: number = 0;

  private callbacks: Array<{l: CountdownLevel; n: number; fn: (currentLevel: CountdownLevel) => void; }> = [];

  private getLevel: ICountdown['getLevel'] = () => this.level;
  private addTask: ICountdown['addTask'] = (level, callback): number => {
    if (level <= this.level) {
      setTimeout(() => {callback(this.level)}, 1);
      return 0;
    }

    this.callbacks.push({
      l: level,
      n: this.numCallback++,
      fn: callback,
    });

    return this.numCallback;
  };

  private removeTask: ICountdown['removeTask'] = (numCallback: number): void => {
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
    this.runCallbacks();
  };

  public render() {
    return (
      <CountdownCtx.Provider value={this.countdown}>
        {this.props.children}
      </CountdownCtx.Provider>
    );
  }
}

export default CountdownCtxCmp;
