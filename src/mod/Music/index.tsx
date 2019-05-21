import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import {IModProps} from 'mod/types';
import MusicCover from 'cmp/MusicCover';

import {SOCIAL} from 'types/social';

import cover0 from './assets/covers/cover0.jpg';
import cover1 from './assets/covers/cover1.jpg';
import different from './assets/covers/different.jpg';
import myVoice from './assets/covers/my_voice.jpg';
import itunes from 'assets/icons/shops/itunes_buy.png';
import spotify from 'assets/icons/shops/spotify_buy.png';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps extends IModProps {
}

interface IProps extends IOwnProps {
}

interface IState {
  playedSongId: string | null;
}

const songs = {
  different: {
    id: 'different',
  },

  myVoice: {
    id: 'myVoice'
  },

  first: {
    id: 'first'
  },

  second: {
    id: 'second',
  },
};

class Music extends React.Component<IProps, IState> {

  state = {
    playedSongId: null,
  };



  private handlePlayerControl = (id: string) => {
    const { playedSongId } = this.state;

    if (id === playedSongId) {
      this.setState({
        playedSongId: null,
      });
    } else {
      this.setState({
        playedSongId: id,
      });
    }

  };

  render() {
    const { offUserInteraction } = this.props;
    const {playedSongId} = this.state;

    return (
      <div id={ROUTES.MUSIC.HTML_ID} className={cn(cssMod.mod, css.music)}>
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.MUSIC.TITLE}</h2>

        <div className={css.covers}>
          <div className={css.row}>
            <MusicCover urlCover={cover1} className={css.coverItem} onPlayerControl={this.handlePlayerControl}
                        id={songs.first.id} isPlayed={playedSongId===songs.first.id} active/>
            <MusicCover urlCover={cover0} className={css.coverItem} onPlayerControl={this.handlePlayerControl}
                        id={songs.myVoice.id} isPlayed={playedSongId===songs.myVoice.id} />
          </div>

          <div className={css.row}>
            <MusicCover urlCover={different} className={css.coverItem} onPlayerControl={this.handlePlayerControl}
                        id={songs.different.id} isPlayed={playedSongId === songs.second.id}/>
            <MusicCover urlCover={myVoice} className={css.coverItem} onPlayerControl={this.handlePlayerControl}
                        id={songs.second.id} isPlayed={playedSongId === songs.second.id}/>
          </div>
        </div>


        <div className={css.shops}>
          <a
            href={SOCIAL.ITUNES.URL}
            target="_blank"
            rel="noopener noreferrer"
            className={css.shop}
            style={{ backgroundImage: `url(${itunes})`}}
            {...(offUserInteraction && { tabIndex: -1})}
          > </a>
          <a
            href={SOCIAL.SPOTIFY.URL}
            target="_blank"
            rel="noopener noreferrer"
            className={css.shop}
            style={{ backgroundImage: `url(${spotify})`}}
            {...(offUserInteraction && { tabIndex: -1})}
          > </a>
        </div>
      </div>
    );
  }
}

export default Music;
