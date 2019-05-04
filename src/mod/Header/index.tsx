import React from 'react';
import {IModProps} from 'mod/types';

import {MOD_HTML_ID} from 'types/routes';

import css from './style.module.css';

interface IOwnProps extends IModProps {
}

interface IProps extends IOwnProps {
}

export default class Header extends React.Component<IProps> {


  render() {
    // const props = this.props;

    return (
      <div id={MOD_HTML_ID.HEADER} className={css.header}>
        Header





      </div>
    );
  }
}
