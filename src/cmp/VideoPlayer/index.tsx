import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface IOwnProps {
  className?: string;
  urlCover: string;
  active?: boolean;
  isPlayed?: boolean;
  hasUserInteraction?: boolean;
}

class VideoPlayer extends React.Component<IOwnProps> {
  render() {
    const { urlCover, className, isPlayed, hasUserInteraction } = this.props;
    const styleBtn = isPlayed ? css.pause : css.play;

    return (
      <div
        className={cn(css.videoPlayer, className)}
        style={{ backgroundImage: `url(${urlCover})`}}
      >

        <img src={urlCover} className={css.img} alt=''/>

        <button
          className={cn(css.btn, styleBtn)}
          {...!hasUserInteraction && { tabIndex: -1 }}
        />
      </div>
    );
  }
}

export default VideoPlayer;
