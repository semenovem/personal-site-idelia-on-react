import React from "react";
import CountdownCtx from "./CountdownCtx";
import {CountdownLevel, ICountdown} from './types';

type IProps = {};

interface IState {
  countdown: ICountdown;
}

class CountdownCtxCmp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      countdown: {
        level: CountdownLevel.CORE,
      }
    };

    setTimeout(this.changeLevel.bind(this, CountdownLevel.CRITICAL), 500);
    setTimeout(this.changeLevel.bind(this, CountdownLevel.IMPORTANT), 1000);

    setTimeout(this.changeLevel.bind(this, CountdownLevel.MINOR), 3000);
    setTimeout(this.changeLevel.bind(this, CountdownLevel.NOT_IMPORTANT), 6000);
  }

  /**
   * manage level
   */
  private changeLevel = (level: CountdownLevel) => {
    this.setState({
      countdown: {
        ...this.state.countdown,
        level,
      }
    });
  };


  public render() {
    return (
      <CountdownCtx.Provider value={this.state.countdown}>
        {this.props.children}
      </CountdownCtx.Provider>
    );
  }
}

export default CountdownCtxCmp;
