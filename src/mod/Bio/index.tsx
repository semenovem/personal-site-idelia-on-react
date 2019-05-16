import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import {IModProps} from 'mod/types';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';


interface IOwnProps extends IModProps {
  className?: string;
}

interface IProps extends IOwnProps {
}

class Bio extends React.Component<IProps> {
  render() {
    const { className } = this.props;

    return (
      <div id={ROUTES.BIO.HTML_ID} className={cn(cssMod.mod, css.bio, className)}>
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.BIO.TITLE}</h2>


        <div className={cn(cssTypography.textBio, css.note)}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis.
          </p>
        </div>
      </div>
    );
  }
}

export default Bio;


