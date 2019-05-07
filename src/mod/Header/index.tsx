import React from 'react';
import {IModProps} from 'mod/types';
import HamMNenu from 'cmp/HamMenu';

import {MOD_HTML_ID} from 'types/routes';

import css from './style.module.css';

interface IOwnProps extends IModProps {
}

interface IProps extends IOwnProps {
}

export default class Header extends React.Component<IProps> {

  private handleOpenMenu = () => {
    console.log('handleOpenMenu');
  };


  render() {
    // const props = this.props;

    return (
      <div id={MOD_HTML_ID.HEADER} className={css.header}>

        <HamMNenu
          onOpen={this.handleOpenMenu}
          className={css.hamMenu}
        />
        Header


      </div>
    );
  }
}
