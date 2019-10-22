import React from 'react';
import cn from 'classnames';

import { ROUTES } from 'types/routes';
import MusicCover from 'cmp/MusicCover';
import { withUserInteraction, PageMgrUserInteractionProps } from 'ctx/PageMgr';
import { MusicPlayerProps, withCtxMusicPlayer } from 'ctx/MusicPlayer';
import { Status } from 'types/player';

import itunes from 'assets/icons/shops/itunes_buy.png';
import spotify from 'assets/icons/shops/spotify_buy.png';

import cssTypography from 'pages/SinglePage/styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import { findUrl, Song, songs } from './songs';
import Bg from './Background';
import css from './style.module.css';

interface OwnProps {}

interface Props extends OwnProps, PageMgrUserInteractionProps, MusicPlayerProps {}

interface State {
  playedSongId: string | null;
}

class Music extends React.Component<Props, State> {
  public state = {
    playedSongId: null,
  };

  public shouldComponentUpdate(nextProps: Props, nextState: State) {
    const { hasUserInteraction, musicPlayer } = this.props;
    const { playedSongId } = this.state;
    return (
      nextProps.hasUserInteraction !== hasUserInteraction ||
      nextState.playedSongId !== playedSongId ||
      musicPlayer.status !== nextProps.musicPlayer.status
    );
  }

  private handlePlayerControl = (id: string) => {
    const { playedSongId } = this.state;
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
      }
    );
  };

  private renderSong(song: Song) {
    const {
      hasUserInteraction,
      musicPlayer: { status },
    } = this.props;
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
          {song.itunes && (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a
              href={song.itunes}
              target="_blank"
              rel="noopener noreferrer"
              className={css.store}
              style={{ backgroundImage: `url(${itunes})` }}
              {...(!hasUserInteraction && { tabIndex: -1 })}
            />
          )}
          {song.spotify && (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a
              href={song.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className={css.store}
              style={{ backgroundImage: `url(${spotify})` }}
              {...(!hasUserInteraction && { tabIndex: -1 })}
            />
          )}
          {!song.spotify && !song.itunes && (
            <div className={cn(css.store, css.comingSoon)}>Coming soon</div>
          )}
        </div>
      </div>
    );
  }

  public render() {
    return (
      <div id={ROUTES.MUSIC.HTML_ID} className={cn(cssMod.mod, css.music)}>
        <Bg className={css.bg} />
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.MUSIC.TITLE}</h2>

        <div className={css.songs}>{songs.map(it => this.renderSong(it))}</div>
      </div>
    );
  }
}

export default withCtxMusicPlayer(withUserInteraction(Music));
