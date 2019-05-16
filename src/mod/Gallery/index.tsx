import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import {IModProps} from 'mod/types';

import photo006 from './assets/006.jpg';

import cssCommon from "styles/common.module.css";
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
    const {offUserInteraction} = this.props;

    return (
      <div id={ROUTES.GALLERY.HTML_ID} className={cn(cssMod.mod, css.gallery)}>
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.GALLERY.TITLE}</h2>


        <div className={css.wrap}>
          <button
            className={cn(cssCommon.resetBtnStyles, css.arrowL)}
            {...(offUserInteraction && {tabIndex: -1})}
          />

          <div className={css.content}>

            <img src={photo006} alt='' />

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

export default Gallery;
