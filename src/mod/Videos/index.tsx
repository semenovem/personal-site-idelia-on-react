import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import VideoPlayer from 'cmp/VideoPlayer';
import VideoPlayerYoutube from 'cmp/VideoPlayerYoutube';
import { withOffTabIndexCtx, IOffTabIndex } from 'ctx/OffTabIndex';
import { withCtxMusicPlayer, IMusicPlayerProps } from 'ctx/MusicPlayer';

import video0 from './assets/covers/video0.jpg';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps {}
type IProps = IOwnProps & IOffTabIndex & IMusicPlayerProps;

const HTML_ID_PLAYER = 'video-player';

class Videos extends React.Component<IProps> {
  private handlePlay = () => this.props.musicPlayer.pause();


  render() {
    const { offTabIndex, musicPlayer } = this.props;

    return (
      <div id={ROUTES.VIDEOS.HTML_ID} className={cn(cssMod.modFreePaddingSides, css.video)}>
        <h2 className={cn(cssTypography.modTitleVideo, cssMod.title)}>{ROUTES.VIDEOS.TITLE}</h2>

        <VideoPlayerYoutube
          htmlId={HTML_ID_PLAYER}
          className={css.player}
          src='https://www.youtube.com/embed/_qQYNjPbboM?controls=0&modestbranding=1&enablejsapi=1'
          onPlay={this.handlePlay}
          isPause={musicPlayer.isPlay()}
        />

        <div className={css.wrap}>
          <button
            className={css.arrowL}
            {...offTabIndex && {tabIndex: -1}}
          />

          <div className={css.content}>
            <VideoPlayer
              urlCover={video0}
              className={css.player}
              offTabIndex
            />
          </div>


          <button
            className={css.arrowR}
            {...offTabIndex && {tabIndex: -1}}
          />
        </div>


      </div>
    );
  }
}

export default withOffTabIndexCtx(withCtxMusicPlayer(Videos));

