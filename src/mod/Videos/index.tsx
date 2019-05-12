import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import {IModProps} from 'mod/types';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps extends IModProps {
  offUserInteraction: boolean;
}

interface IProps extends IOwnProps {
}

class Videos extends React.Component<IProps> {

  render() {
    return (
      <div id={ROUTES.VIDEOS.HTML_ID} className={cn(cssMod.mod, css.video)}>
        <h2 className={cssTypography.modTitle}>{ROUTES.VIDEOS.TITLE}</h2>

      </div>
    );
  }
}


export default Videos;
