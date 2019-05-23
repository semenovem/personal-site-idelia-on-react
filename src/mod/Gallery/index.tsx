import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import { withOffTabIndexCtx, IOffTabIndex } from 'ctx/OffTabIndex';

import photo006 from './assets/006.jpg';
import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps extends IOffTabIndex {
}

class Gallery extends React.Component<IOwnProps> {

  render() {
    const {offTabIndex} = this.props;

    return (
      <div id={ROUTES.GALLERY.HTML_ID} className={cn(cssMod.mod, css.gallery)}>
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.GALLERY.TITLE}</h2>


        <div className={css.wrap}>
          <button
            className={css.arrowL}
            {...(offTabIndex && {tabIndex: -1})}
          />

          <div className={css.content}>

            <img src={photo006} alt='' />

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

export default withOffTabIndexCtx(Gallery);
