import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface IOwnProps {
  className: string;
  urlCover: string;
  active?: boolean;
  isPlayed?: boolean;
  id: string;
  hasUserInteraction?: boolean;
  onPlayerControl:(id: string) => void;
  nameTrack: string;
}

class MusicCover extends React.Component<IOwnProps> {
  private flag: boolean = false;
  private timer: number | null = null;

  public componentWillUnmount() {
    this.clearTimer();
  }

  private handleAction = () => {
    const { onPlayerControl, id } = this.props;
    onPlayerControl(id);
  };

  private handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.flag) {
      this.flag = false;
      return;
    }
    this.handleAction();
  };

  private handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.flag = true;
    this.clearTimer();
    this.timer = window.setTimeout(this.resetFlag, 20);

    this.handleAction();
  };

  private resetFlag = () => this.flag = false;

  private clearTimer = () => this.timer && clearTimeout(this.timer);

  render() {
    const { urlCover, className, isPlayed, hasUserInteraction, nameTrack } = this.props;
    const styleBtn = isPlayed ? css.pause : css.play;

    return (
      <div
        className={cn(css.musicCover, className)}
        onClick={this.handleClick}
      >
        <img src={urlCover} className={cn(css.img, !isPlayed && css.grayscale)} alt=''/>

        <button
          className={cn(css.btn, styleBtn)}
          onClick={this.handleBtnClick}
          {...!hasUserInteraction && { tabIndex: -1 }}
          aria-label={isPlayed ? `Stop track ${nameTrack}` : `Play track ${nameTrack}`}
        />
      </div>
    );
  }
}

export default MusicCover;
