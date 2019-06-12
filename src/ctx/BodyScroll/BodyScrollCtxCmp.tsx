import React from "react";
import BodyScrollCtx from "./BodyScrollCtx";
import {IBodyScroll} from './types';

type IProps = {};

interface IState {
  bodyScroll: IBodyScroll;
}

class BodyScrollCtxCmp extends React.Component<IProps, IState> {
  stack: boolean[] = [];

  bodyScroll: IBodyScroll;

  constructor(props: IProps) {
    super(props);

    this.bodyScroll = {
      on: this.changeScroll.bind(this, true),
      off: this.changeScroll.bind(this, false),
      getStatus: this.getStatus,
    };
  }

  private getStatus = () => !this.stack.length;

  private changeScroll(status: boolean) {
    if (status) {
      this.stack.pop();
    } else {
      this.stack.push(true);
    }
    window.requestAnimationFrame(this.changeBodyScroll);
  };

  private changeBodyScroll = () => {
    document.body.style.overflow = this.stack.length ? 'hidden' : null;
  };

  public render() {
    return (
      <BodyScrollCtx.Provider value={this.bodyScroll}>
        {this.props.children}
      </BodyScrollCtx.Provider>
    );
  }
}

export default BodyScrollCtxCmp;
