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

class Gallery extends React.Component<IProps> {

  render() {
    return (
      <div id={ROUTES.GALLERY.HTML_ID} className={cn(cssMod.mod, css.gallery)}>
        <h2 className={cssTypography.modTitle}>{ROUTES.GALLERY.TITLE}</h2>

      </div>
    );
  }
}

export default Gallery;
