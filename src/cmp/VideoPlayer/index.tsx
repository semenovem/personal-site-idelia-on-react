import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface IOwnProps {
  className?: string;
  urlCover: string;
  active?: boolean;
  isPlayed?: boolean;
  offTabIndex?: boolean;
}

interface IProps extends IOwnProps {}


class VideoPlayer extends React.Component<IProps> {
  render() {
    const { urlCover, className, isPlayed, offTabIndex } = this.props;
    const styleBtn = isPlayed ? css.pause : css.play;

    return (
      <div
        className={cn(css.videoPlayer, className)}
        style={{ backgroundImage: `url(${urlCover})`}}
      >
        <img src={urlCover} className={css.img} alt=''/>

        <button
          className={cn(css.btn, styleBtn)}
          {...offTabIndex && { tabIndex: -1 }}
        />
      </div>
    );
  }
}

export default VideoPlayer;
