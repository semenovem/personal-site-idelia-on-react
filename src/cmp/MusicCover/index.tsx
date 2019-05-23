import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface IOwnProps {
  className: string;
  urlCover: string;
  active?: boolean;
  isPlayed?: boolean;
  id: string;
  offTabIndex?: boolean;
  onPlayerControl:(id: string) => void;
}

class MusicCover extends React.Component<IOwnProps> {
  private handleAActionBtn = () => {
    const { onPlayerControl, id } = this.props;

    onPlayerControl(id);
  };

  render() {
    const { urlCover, className, isPlayed, active, offTabIndex } = this.props;
    const styleBtn = isPlayed ? css.pause : css.play;

    return (
      <div
        className={cn(css.musicCover, className)}
      >
        <img src={urlCover} className={cn(css.img, !active && css.grayscale)} alt=''/>

        <button
          className={cn(css.btn, styleBtn)}
          onClick={this.handleAActionBtn}
          {...(offTabIndex && { tabIndex: -1 })}
        />
      </div>
    );
  }
}

export default MusicCover;
