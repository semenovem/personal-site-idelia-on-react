import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface IOwnProps {
  className: string;
  urlCover: string;
  active?: boolean;
  isPlayed?: boolean;
  id: string;

  onPlayerControl:(id: string) => void;
}

interface IProps extends IOwnProps {}


class MusicCover extends React.Component<IProps> {
  private handleAActionBtn = () => {
    const { onPlayerControl, id } = this.props;

    onPlayerControl(id);
  };


  render() {
    const { urlCover, className, isPlayed, active } = this.props;
    const styleBtn = isPlayed ? css.pause : css.play;

    return (
      <div
        className={cn(css.musicCover, className)}
      >
        <img src={urlCover} className={cn(css.img, !active && css.grayscale)} alt=''/>

        <button className={cn(css.btn, styleBtn)} onClick={this.handleAActionBtn}/>
      </div>
    );
  }
}


export default MusicCover;
