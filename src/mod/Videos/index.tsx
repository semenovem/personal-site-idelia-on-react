import React from 'react';
import cn from 'classnames';

import Bg from './Background';
import {ROUTES} from 'types/routes';
import VideoPlayerYoutube from 'cmp/VideoPlayerYoutube';
import { withOffTabIndexCtx, IOffTabIndex } from 'ctx/OffTabIndex';
import { withCtxMusicPlayer, IMusicPlayerProps } from 'ctx/MusicPlayer';

import ScrollX from 'cmp/ScrollX';

import { videos } from './videos';


import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps {}
type IProps = IOwnProps & IOffTabIndex & IMusicPlayerProps;
type IState = {
  selectedId: number;
}

const HTML_ID_PLAYER = 'video-player';

class Videos extends React.Component<IProps, IState> {
  public state = {
    selectedId: videos[0].id,
  };
  private handlePlay = () => this.props.musicPlayer.pause();


  private handleSelect = (id: string) => {
    if (+id === this.state.selectedId) {
      return;
    }
    this.setState({ selectedId: +id, });
  };

  private renderItems() {
    const { selectedId } = this.state;

    return videos.map(it => (
      <button
        className={cn(css.item, it.id === selectedId && css.selected)}
        key={it.id}
        data-id={it.id}
        tabIndex={0}
      >
        <img src={it.cover} className={css.cover} alt=""/>
        <div className={css.btnPlay}/>
      </button>
    ));
  }



  // https://fns01.ru
  // http://localhost:3000


  render() {
    const { musicPlayer } = this.props;
    const { selectedId } = this.state;
    const video = videos.find(it => it.id === selectedId) || videos[0];

    return (
      <Bg id={ROUTES.VIDEOS.HTML_ID} className={cn(cssMod.modFreePaddingSides, css.video)}>
        <h2 className={cn(cssTypography.modTitleVideo, cssMod.title)}>{ROUTES.VIDEOS.TITLE}</h2>

        <VideoPlayerYoutube
          htmlId={HTML_ID_PLAYER}
          className={css.player}
          src={video.url}
          onPlay={this.handlePlay}
          isPause={musicPlayer.isPlay()}
        />

        <ScrollX
          className={css.scroll}
          nameDataAttr='data-id'
          onClickItem={this.handleSelect}
        >
          {this.renderItems()}
        </ScrollX>
      </Bg>
    );
  }
}

export default withOffTabIndexCtx(withCtxMusicPlayer(Videos));

