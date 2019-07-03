import React from 'react';
import cn from 'classnames';

import CmpBtnHamMenu, { Props as IBtnHamMenuProps } from 'cmp/BtnHamMenu';
import CmpNavMenu, { Props as INavMenuProps } from 'cnt/NavMenu';
import { ROUTES } from 'types/routes';
import { withUserInteraction, PageMgr } from 'ctx/PageMgr';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import Bg from './Background';
import css from './style.module.css';

const NavMenu = withUserInteraction<INavMenuProps>(CmpNavMenu);
const BtnHamMenu = withUserInteraction<IBtnHamMenuProps>(CmpBtnHamMenu);

class Header extends React.Component<{}> {
  private opacity = 1;
  private prevScroll = 0;
  private scrollStep = 15;

  private readonly refTitle: React.RefObject<HTMLDivElement>;

  public constructor(props: {}) {
    super(props);
    this.refTitle = React.createRef();

    window.addEventListener('scroll', this.handleScroll);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll = () => {
    const scroll = document.documentElement.scrollTop;
    const height = window.innerHeight * 0.7;

    if (scroll > height || Math.abs(this.prevScroll + scroll) < this.scrollStep) {
      return;
    }
    this.prevScroll = scroll;
    this.opacity = 1 - scroll / height;
    window.requestAnimationFrame(this.changeOpacityTitle);
  };

  private changeOpacityTitle = () => {
    if (this.refTitle.current) {
      this.refTitle.current.style.opacity = this.opacity.toString();
    }
  };

  private handleOpenHamMenu = () => {
    PageMgr.open(PageMgr.Page.HAM_MENU);
  };

  public render() {
    return (
      <div id={ROUTES.HEADER.HTML_ID} className={css.header}>
        <div className={css.cover}>
          <Bg className={css.bg} />
          <div className={css.sticky}>
            <BtnHamMenu className={cssMod.btnHamMenu} onOpen={this.handleOpenHamMenu} />

            <div className={cn(css.titleSite, cssTypography.modHeaderTitleMob)} ref={this.refTitle}>
              <div>IDELIA</div>
              <div>MARS</div>
            </div>
          </div>
        </div>

        <NavMenu onSelect={noop} />
      </div>
    );
  }
}

export default Header;

function noop() {}
