import React from 'react';
import cn from 'classnames';

import {IMusicPlayerProps, withCtxMusicPlayer} from 'ctx/MusicPlayer';

import css from './style.module.css';
import {Status} from "types/player";

type IProps = IMusicPlayerProps;

class Music extends React.Component<IProps> {
  private refAudio: HTMLAudioElement | null = null;
  private setRefAudio = (el: HTMLAudioElement) => this.refAudio = el;

  public shouldComponentUpdate({ musicPlayer }: Readonly<IMusicPlayerProps>): boolean {
    const { musicPlayer: { status, url } } = this.props;

    return status !== musicPlayer.status || url !== musicPlayer.url;
  }

  public componentDidUpdate(): void {
    const { musicPlayer } = this.props;

    if (!this.refAudio) {
      return;
    }

    this.refAudio.load();

    if (musicPlayer.url) {
      if (musicPlayer.status === Status.PLAY) {
        this.refAudio.play();
      } else {
        this.refAudio.pause();
      }
    }
  }

  private renderSource(url: string | null) {
    if (!url) {
      return null;
    }

    return (
      <source src={url} type="audio/mpeg"/>
    );
  }

  public render() {
    const { musicPlayer } = this.props;

    return (
      <div className={cn(css.musicPlayer, musicPlayer.status === Status.PLAY && css.show)}>
        <audio controls className={cn(css.controls)} ref={this.setRefAudio}>
          {this.renderSource(musicPlayer.url)}
        </audio>
      </div>
    );
  }
}

export default withCtxMusicPlayer(Music);
