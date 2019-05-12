import React from 'react';
import cn from 'classnames';
import {IModProps} from 'mod/types';
import BtnHamMenu from 'cmp/BtnHamMenu';

import NavMenu from 'cmp/NavMenu';

import {ROUTES} from 'types/routes';

import cssCommon from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps extends IModProps {
  onActOpenHamMenu: () => void;
}

interface IProps extends IOwnProps {
}

class Header extends React.Component<IProps> {
  render() {
    const {onActOpenHamMenu, offUserInteraction} = this.props;

    return (
      <div id={ROUTES.HEADER.HTML_ID} className={css.header}>
        <div className={css.cover}>
          <BtnHamMenu
            className={cssMod.btnHamMenu}
            onOpen={onActOpenHamMenu}
            offUserInteraction={offUserInteraction}
          />

          <div className={cn(cssCommon.titleSite, css.titleSite)}>
            <div>IDELIA</div>
            <div>MARS</div>
          </div>
        </div>

        <NavMenu onSelect={noop} offUserInteraction={offUserInteraction}/>
      </div>
    );
  }
}

export default Header;

function noop() {}
