import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import VideoPlayer from 'cmp/VideoPlayer';
import { withOffTabIndexCtx, IOffTabIndex} from 'ctx/OffTabIndex';

import video0 from './assets/covers/video0.jpg';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps extends IOffTabIndex {}

class Videos extends React.Component<IOwnProps> {

  render() {
    const { offTabIndex } = this.props;

    return (
      <div id={ROUTES.VIDEOS.HTML_ID} className={cn(cssMod.mod, css.video)}>
        <h2 className={cn(cssTypography.modTitleVideo, cssMod.title)}>{ROUTES.VIDEOS.TITLE}</h2>

        <div className={css.wrap}>
          <button
            className={css.arrowL}
            {...(offTabIndex && {tabIndex: -1})}
          />

          <div className={css.content}>
            <VideoPlayer urlCover={video0} className={css.player}/>
          </div>

          <button
            className={css.arrowR}
            {...(offTabIndex && {tabIndex: -1})}
          />

        </div>
      </div>
    );
  }
}

export default withOffTabIndexCtx(Videos);
