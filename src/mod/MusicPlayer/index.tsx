import React from 'react';
import cn from 'classnames';

import {IOffTabIndex, withOffTabIndexCtx} from 'ctx/OffTabIndex';
import {IMusicPlayerProps, withMusicPlayerCtx} from 'ctx/MusicPlayer';

import css from './style.module.css';
import {Status} from "../../types/player";

interface IOwnProps {}

interface IProps extends IOwnProps, IOffTabIndex, IMusicPlayerProps {}

interface IState {
  playedSongId: string | null;
}

class Music extends React.Component<IProps, IState> {
  state = {
    playedSongId: null,
  };

  private refAudio: HTMLAudioElement | null = null;
  private setRefAudio = (el: HTMLAudioElement) => this.refAudio = el;

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

export default withMusicPlayerCtx(withOffTabIndexCtx(Music));
