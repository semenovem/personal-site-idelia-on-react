import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import {IModProps} from 'mod/types';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps extends IModProps {
}

interface IProps extends IOwnProps {
}

class Contact extends React.Component<IProps> {
  render() {
    return (
      <div id={ROUTES.CONTACT.HTML_ID} className={cn(cssMod.mod, css.contact)}>
        <h2 className={cssTypography.modTitle}>{ROUTES.CONTACT.TITLE}</h2>

      </div>
    );
  }
}

export default Contact;
