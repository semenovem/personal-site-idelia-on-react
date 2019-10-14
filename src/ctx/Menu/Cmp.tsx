import React from 'react';

import Ctx from './Ctx';
import { Menu } from './types';

type State = Menu;

class Cmp extends React.Component<{}, State> {
  public static displayName = 'MenuCtxCmp';

  public constructor(props: {}) {
    super(props);

    this.state = {
      isOpen: false,
      // eslint-disable-next-line react/no-unused-state
      open: this.open,
      // eslint-disable-next-line react/no-unused-state
      close: this.close,
    };
  }

  private open = () => {
    if (!this.state.isOpen) {
      this.setState({
        isOpen: true,
      });
    }
  };

  private close = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
    }
  };

  public render() {
    return <Ctx.Provider value={this.state}>{this.props.children}</Ctx.Provider>;
  }
}

export default Cmp;
