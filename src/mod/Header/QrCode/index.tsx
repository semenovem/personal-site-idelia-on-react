import React from 'react';
import cn from 'classnames';

import { CountdownLevel, CountdownProps, withCtxCountdown } from 'ctx/Countdown';
import imgQr from 'assets/qr.svg';

import css from './style.module.css';

interface OwnProps {
  className?: string;
}

interface State {
  shown: boolean;
}

type Props = OwnProps & CountdownProps;

class QrCode extends React.Component<Props, State> {
  private task: number;

  public constructor(props: Props) {
    super(props);

    this.state = {
      shown: false,
    };

    this.task = props.countdown.addTask(CountdownLevel.IMPORTANT, this.callback);
  }

  public componentWillUnmount() {
    this.props.countdown.removeTask(this.task);
  }

  private callback = () => {
    this.setState({
      shown: true,
    });
  };

  public render() {
    if (!this.state.shown) {
      return null;
    }

    const { className } = this.props;

    return (
      <div className={cn(css.qrCode, className)}>
        <img src={imgQr} className={css.img} alt="QR code" aria-label="QR code for " />
      </div>
    );
  }
}

export default withCtxCountdown<OwnProps>(QrCode);
