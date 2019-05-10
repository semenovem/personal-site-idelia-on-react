import React from 'react';
import cn from 'classnames';
import {IModProps} from 'mod/types';
import BtnHamMenu from 'cmp/BtnHamMenu';

import NavMenu from 'cmp/NavMenu';

import {MOD_HTML_ID} from 'types/routes';

import cssCommon from 'styles/typography.module.css';
import css from './style.module.css';

interface IOwnProps extends IModProps {
  onActOpenHamMenu: () => void;
}

interface IProps extends IOwnProps {
}

export default class Header extends React.Component<IProps> {


  private handleSelectNavMenu = () => {

  };


  render() {
    const {onActOpenHamMenu} = this.props;

    return (
      <div id={MOD_HTML_ID.HEADER} className={css.header}>

        <div className={css.cover}>

          <BtnHamMenu
            className={css.hamMenu}
            onOpen={onActOpenHamMenu}
          />

          <div className={cn(cssCommon.titleSite, css.titleSite)}>
            <div>IDELIA</div>
            <div>MARS</div>
          </div>

        </div>


        <NavMenu className={css.navMenu} onSelect={this.handleSelectNavMenu}/>
      </div>
    );
  }
}
