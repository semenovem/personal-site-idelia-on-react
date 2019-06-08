import React from 'react';
import CmpBtnHamMenu, { IProps as IBtnHamMenuProps } from 'cmp/BtnHamMenu';
import CmpNavMenu, { IProps as INavMenuProps } from 'mod/NavMenu';
import {ROUTES} from 'types/routes';
import { withOffTabIndexCtx } from 'ctx/OffTabIndex';
import Background from './Background';

import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps {
  onActOpenHamMenu: () => void;
}

const NavMenu = withOffTabIndexCtx<INavMenuProps>(CmpNavMenu);
const BtnHamMenu = withOffTabIndexCtx<IBtnHamMenuProps>(CmpBtnHamMenu);

class Header extends React.Component<IOwnProps> {
  render() {
    const {onActOpenHamMenu} = this.props;

    return (
      <div id={ROUTES.HEADER.HTML_ID} className={css.header}>
        <Background className={css.cover}>
          <div className={css.sticky}>

            <BtnHamMenu
              className={cssMod.btnHamMenu}
              onOpen={onActOpenHamMenu}
            />

            <div className={css.titleSite}/>
          </div>
        </Background>

        <NavMenu onSelect={noop} />
      </div>
    );
  }
}

export default Header;

function noop() {}
