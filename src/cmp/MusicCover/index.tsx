import React from 'react';
import cn from 'classnames';

import cssCommon from 'styles/common.module.css';
import css from './style.module.css';

interface IOwnProps {
  className: string;
  urlCover: string;
  active?: boolean;
  isPlayed?: boolean;
}

interface IProps extends IOwnProps {}


class MusicCover extends React.Component<IProps> {
  render() {
    const { urlCover, className, isPlayed } = this.props;
    const styleBtn = isPlayed ? css.pause : css.play;

    return (
      <div
        className={cn(css.musicCover, className)}
        style={{ backgroundImage: `url(${urlCover})`}}
      >
        <button className={cn(cssCommon.resetBtnStyles, css.btn, styleBtn)}/>
      </div>
    );
  }
}

export default MusicCover;
