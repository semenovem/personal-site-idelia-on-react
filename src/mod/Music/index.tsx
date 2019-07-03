import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import MusicCover from 'cmp/MusicCover';
import { withUserInteraction, PageMgrUserInteractionProps } from 'ctx/PageMgr';
import {IMusicPlayerProps, withCtxMusicPlayer} from 'ctx/MusicPlayer';
import {Status} from 'types/player';
import Bg from './Background';

import itunes from 'assets/icons/shops/itunes_buy.png';
import spotify from 'assets/icons/shops/spotify_buy.png';

import {findUrl, ISong, songs} from './songs';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps {}

interface IProps extends IOwnProps, PageMgrUserInteractionProps, IMusicPlayerProps {}

interface IState {
  playedSongId: string | null;
}

class Music extends React.Component<IProps, IState> {
  state = {
    playedSongId: null,
  };

  public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    const { hasUserInteraction, musicPlayer } = this.props;
    const { playedSongId } = this.state;
    return nextProps.hasUserInteraction !== hasUserInteraction || nextState.playedSongId !== playedSongId || musicPlayer.status !== nextProps.musicPlayer.status;
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
    const { hasUserInteraction, musicPlayer: { status } } = this.props;
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
          hasUserInteraction={hasUserInteraction}
          nameTrack={song.name}
        />

        <div className={css.buy}>
          {song.itunes &&
            <a
              href={song.itunes}
              target="_blank"
              rel="noopener noreferrer"
              className={css.store}
              style={{backgroundImage: `url(${itunes})`}}
              {...!hasUserInteraction && {tabIndex: -1}}
            > </a>
          }
          {song.spotify &&
            <a
              href={song.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className={css.store}
              style={{backgroundImage: `url(${spotify})`}}
              {...!hasUserInteraction && {tabIndex: -1}}
            > </a>
          }
          {!song.spotify && !song.itunes && <div className={cn(css.store, css.comingSoon)}>Coming soon</div>}

        </div>
      </div>
    );
  }

  public render() {
    return (
      <div id={ROUTES.MUSIC.HTML_ID} className={cn(cssMod.mod, css.music)}>
        <Bg className={css.bg}/>
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.MUSIC.TITLE}</h2>

        <div className={css.songs}>
          {songs.map(it => this.renderSong(it))}
        </div>
      </div>
    );
  }
}

export default withCtxMusicPlayer(withUserInteraction(Music));
