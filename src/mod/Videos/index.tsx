import React from 'react';
import cn from 'classnames';

import { ROUTES } from 'types/routes';
import VideoPlayerYoutube from 'cnt/VideoPlayerYoutube';
import { withUserInteraction, PageMgrUserInteractionProps } from 'ctx/PageMgr';
import ScrollX from 'cmp/ScrollX';
import { musicPlayerControl } from 'ctx/MusicPlayer';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import { videos } from './videos';
import Bg from './Background';
import css from './style.module.css';

interface OwnProps {}
type Props = OwnProps & PageMgrUserInteractionProps;
interface State {
  selectedId: number;
}

const HTML_ID_PLAYER = 'video-player';

class Videos extends React.Component<Props, State> {
  public state = {
    selectedId: videos[0].id,
  };
  private handlePlay = () => musicPlayerControl.pause();

  private handleSelect = (id: string) => {
    if (+id === this.state.selectedId) {
      return;
    }
    this.setState({ selectedId: +id });
  };

  private renderItems() {
    const { hasUserInteraction } = this.props;
    const { selectedId } = this.state;

    return videos.map(it => (
      // eslint-disable-next-line react/button-has-type
      <button
        className={cn(css.item, it.id === selectedId && css.selected)}
        key={it.id}
        data-id={it.id}
        {...(!hasUserInteraction && { tabIndex: -1 })}
        type="button"
      >
        <img src={it.cover} className={css.cover} alt="" />
        <div className={css.btnPlay} />
      </button>
    ));
  }

  // https://fns01.ru
  // http://localhost:3000

  public render() {
    const { hasUserInteraction } = this.props;
    const { selectedId } = this.state;
    const video = videos.find(it => it.id === selectedId) || videos[0];

    return (
      <div id={ROUTES.VIDEOS.HTML_ID} className={cn(cssMod.modFreePaddingSides, css.video)}>
        <Bg className={css.bg} />
        <h2 className={cn(cssTypography.modTitleVideo, cssMod.title)}>{ROUTES.VIDEOS.TITLE}</h2>

        <VideoPlayerYoutube
          htmlId={HTML_ID_PLAYER}
          className={css.player}
          src={video.url}
          onPlay={this.handlePlay}
          hasUserInteraction={hasUserInteraction}
        />

        <ScrollX
          className={css.scroll}
          nameDataAttr="data-id"
          onClickItem={this.handleSelect}
          hasUserInteraction={hasUserInteraction}
        >
          {this.renderItems()}
        </ScrollX>
      </div>
    );
  }
}

export default withUserInteraction(Videos);
