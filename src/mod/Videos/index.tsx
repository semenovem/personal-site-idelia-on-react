import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import {IModProps} from 'mod/types';
import VideoPlayer from 'cmp/VideoPlayer';

import video0 from './assets/covers/video0.jpg';

import cssCommon from 'styles/common.module.css';
import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps extends IModProps {
}

interface IProps extends IOwnProps {
}

class Videos extends React.Component<IProps> {

  render() {
    const { offUserInteraction } = this.props;

    return (
      <div id={ROUTES.VIDEOS.HTML_ID} className={cn(cssMod.mod, css.video)}>
        <h2 className={cn(cssTypography.modTitleVideo, cssMod.title)}>{ROUTES.VIDEOS.TITLE}</h2>

        <div className={css.wrap}>
          <button
            className={cn(cssCommon.resetBtnStyles, css.arrowL)}
            {...(offUserInteraction && {tabIndex: -1})}
          />

          <div className={css.content}>
            <VideoPlayer urlCover={video0} className={css.player}/>
          </div>

          <button
            className={cn(cssCommon.resetBtnStyles, css.arrowR)}
            {...(offUserInteraction && {tabIndex: -1})}
          />

        </div>
      </div>
    );
  }
}


export default Videos;
