import React from 'react';

import {MOD} from 'types/routes';
import {IModProps} from 'mod/types';

import cssTypography from 'styles/typography.module.css';
import css from './style.module.css';

interface IOwnProps extends IModProps {
  hasUserInteraction: boolean;
}

interface IProps extends IOwnProps {
}

export default class Music extends React.Component<IProps> {

  render() {
    return (
      <div id={MOD.MUSIC.HTML_ID} className={css.music}>

        <h2 className={cssTypography.modTitle}>{MOD.MUSIC.TITLE}</h2>

        Music
      </div>
    );
  }
}
