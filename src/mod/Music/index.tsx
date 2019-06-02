import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import MusicCover from 'cmp/MusicCover';
import {IOffTabIndex, withOffTabIndexCtx} from 'ctx/OffTabIndex';
import {IMusicPlayerProps, withCtxMusicPlayer} from 'ctx/MusicPlayer';
import {Status} from 'types/player';

import itunes from 'assets/icons/shops/itunes_buy.png';
import spotify from 'assets/icons/shops/spotify_buy.png';

import {findUrl, ISong, songs} from './songs';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps {}

interface IProps extends IOwnProps, IOffTabIndex, IMusicPlayerProps {}

interface IState {
  playedSongId: string | null;
}

class Music extends React.Component<IProps, IState> {
  state = {
    playedSongId: null,
  };

  public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    const { offTabIndex, musicPlayer } = this.props;
    const { playedSongId } = this.state;
    return nextProps.offTabIndex !== offTabIndex || nextState.playedSongId !== playedSongId || musicPlayer.status !== nextProps.musicPlayer.status;
  }

  private handlePlayerControl = (id: string) => {
    const { playedSongId, } = this.state;
    const { musicPlayer } = this.props;

    if (musicPlayer.status === Status.PAUSE && musicPlayer.url) {
      musicPlayer.play();
      return;
    }

    this.setState(
      {
        playedSongId: id === playedSongId ? null : id,
      },
      () => {
        musicPlayer.change(findUrl(this.state.playedSongId));
      });
  };

  private renderSong(song: ISong) {
    const { offTabIndex, musicPlayer: { status } } = this.props;
    const { playedSongId } = this.state;
    const isPlayed = status === Status.PLAY && song.id === playedSongId;

    return (
      <div className={css.song} key={song.id}>
        <MusicCover
          urlCover={song.coverUrl}
          className={css.cover}
          onPlayerControl={this.handlePlayerControl}
          id={song.id}
          isPlayed={isPlayed}
          offTabIndex={offTabIndex}
        />

        <div className={css.buy}>
          <a
            href={song.itunes}
            target="_blank"
            rel="noopener noreferrer"
            className={css.store}
            style={{ backgroundImage: `url(${itunes})`}}
            {...offTabIndex && { tabIndex: -1 }}
          />
          <a
            href={song.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className={css.store}
            style={{ backgroundImage: `url(${spotify})`}}
            {...offTabIndex && { tabIndex: -1 }}
          />
        </div>
      </div>
    );
  }

  public render() {
    return (
      <div id={ROUTES.MUSIC.HTML_ID} className={cn(cssMod.mod, css.music)}>
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.MUSIC.TITLE}</h2>

        <div className={css.songs}>
          {songs.map(it => this.renderSong(it))}
        </div>
      </div>
    );
  }
}

export default withCtxMusicPlayer(withOffTabIndexCtx(Music));
