import React from 'react';
import cn from 'classnames';

import { MusicPlayerProps, withCtxMusicPlayer } from 'ctx/MusicPlayer';

import { Status } from 'types/player';
import css from './style.module.css';

type Props = MusicPlayerProps;

class Music extends React.Component<Props> {
  private refAudio: HTMLAudioElement | null = null;

  public shouldComponentUpdate({ musicPlayer }: Readonly<MusicPlayerProps>): boolean {
    const {
      musicPlayer: { status, url },
    } = this.props;

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

  private setRefAudio = (el: HTMLAudioElement) => (this.refAudio = el);

  private renderSource(url: string | null) {
    if (!url) {
      return null;
    }

    return <source src={url} type="audio/mpeg" />;
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
