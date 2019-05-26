import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import MusicCover from 'cmp/MusicCover';
import { withOffTabIndexCtx, IOffTabIndex } from 'ctx/OffTabIndex';
import { withMusicPlayerCtx, IMusicPlayerProps } from 'ctx/MusicPlayer';

import itunes from 'assets/icons/shops/itunes_buy.png';
import spotify from 'assets/icons/shops/spotify_buy.png';

import { songs, ISong } from './songs';

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
    const { offTabIndex } = this.props;
    const { playedSongId } = this.state;
    return nextProps.offTabIndex !== offTabIndex || nextState.playedSongId !== playedSongId;
  }

  private handlePlayerControl = (id: string) => {
    const { playedSongId, } = this.state;
    const { musicPlayer } = this.props;

    if (id === playedSongId) {
      this.setState({
        playedSongId: null,
      });

      musicPlayer.pause();
    } else {
      this.setState({
        playedSongId: id,
      });

      if (playedSongId) {
        musicPlayer.change(songs[playedSongId]);
      }
    }
  };

  private renderSong(song: ISong) {
    const { offTabIndex } = this.props;
    const { playedSongId } = this.state;

    return (
      <div className={css.song}>
        <MusicCover
          urlCover={song.coverUrl}
          className={css.cover}
          onPlayerControl={this.handlePlayerControl}
          id={song.id}
          isPlayed={playedSongId === song.id}
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
          {this.renderSong(songs.different)}
          {this.renderSong(songs.myVoice)}
        </div>
      </div>
    );
  }
}

export default withMusicPlayerCtx(withOffTabIndexCtx(Music));
