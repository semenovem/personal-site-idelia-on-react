import React from 'react';
import cn from 'classnames';
import BtnHamMenuCmp, { IProps as IBtnHamMenuProps } from 'cmp/BtnHamMenu';
import NavMenuCmp, { IProps as INavMenuProps } from 'cmp/NavMenu';
import {ROUTES} from 'types/routes';
import { withOffTabIndexCtx } from 'ctx/OffTabIndex';

import cssMod from 'mod/style.module.css';
import css from './style.module.css';
import dataAttrImgBg from "./dataAttrImgBg";

interface IOwnProps {
  onActOpenHamMenu: () => void;
}

const NavMenu = withOffTabIndexCtx<INavMenuProps>(NavMenuCmp);
const BtnHamMenu = withOffTabIndexCtx<IBtnHamMenuProps>(BtnHamMenuCmp);

class Header extends React.Component<IOwnProps> {
  render() {
    const {onActOpenHamMenu} = this.props;

    return (
      <div id={ROUTES.HEADER.HTML_ID} className={css.header} data-img-bg={dataAttrImgBg}>
        <div className={css.cover}>
          <div className={css.sticky}>
            <BtnHamMenu
              className={cssMod.btnHamMenu}
              onOpen={onActOpenHamMenu}
            />

            <div className={cn(css.titleSite)}/>
          </div>
        </div>

        <NavMenu onSelect={noop} />
      </div>
    );
  }
}

export default Header;

function noop() {}
