import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface OwnProps {
  className: string;
  showPlayer: boolean;
  urlCover: string;
  active?: boolean;
  isPlayed?: boolean;
  id: string;
  hasUserInteraction?: boolean;
  onPlayerControl: (id: string) => void;
  nameTrack: string;
}

class MusicCover extends React.Component<OwnProps> {
  private flag: boolean = false;
  private timer: number | null = null;

  public componentWillUnmount() {
    this.clearTimer();
  }

  private handleAction = () => {
    const { onPlayerControl, id } = this.props;
    onPlayerControl(id);
  };

  private handleClick = () => {
    if (this.flag) {
      this.flag = false;
      return;
    }
    this.handleAction();
  };

  private handleBtnClick = () => {
    this.flag = true;
    this.clearTimer();
    this.timer = window.setTimeout(this.resetFlag, 20);

    this.handleAction();
  };

  private resetFlag = () => (this.flag = false);

  private clearTimer = () => this.timer && clearTimeout(this.timer);

  public render() {
    const { urlCover, className, isPlayed, hasUserInteraction, nameTrack, showPlayer } = this.props;
    const styleBtn = isPlayed ? css.pause : css.play;

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className={cn(css.musicCover, className)} onClick={this.handleClick}>
        <img src={urlCover} className={cn(css.img, !isPlayed && css.grayscale)} alt="" />

        {showPlayer && <button
          className={cn(css.btn, styleBtn)}
          onClick={this.handleBtnClick}
          {...(!hasUserInteraction && { tabIndex: -1 })}
          aria-label={isPlayed ? `Stop track ${nameTrack}` : `Play track ${nameTrack}`}
          type="button"
        />}
      </div>
    );
  }
}

export default MusicCover;
