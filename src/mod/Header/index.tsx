import React from 'react';
import CmpBtnHamMenu, { IProps as IBtnHamMenuProps } from 'cmp/BtnHamMenu';
import CmpNavMenu, { IProps as INavMenuProps } from 'mod/NavMenu';
import {ROUTES} from 'types/routes';
import { withOffTabIndexCtx } from 'ctx/OffTabIndex';
import Bg from './Background';

import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps {
  onActOpenHamMenu: () => void;
}

const NavMenu = withOffTabIndexCtx<INavMenuProps>(CmpNavMenu);
const BtnHamMenu = withOffTabIndexCtx<IBtnHamMenuProps>(CmpBtnHamMenu);

class Header extends React.Component<IOwnProps> {
  private readonly refTitle: React.RefObject<HTMLDivElement>;
  private opacity = 1;
  private prevScroll = 0;
  private scrollStep = 15;

  constructor(props: IOwnProps) {
    super(props);
    this.refTitle = React.createRef();

    window.addEventListener('scroll', this.handleScroll);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll = (event: Event) => {
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

  public render() {
    const {onActOpenHamMenu} = this.props;

    return (
      <div id={ROUTES.HEADER.HTML_ID} className={css.header}>
        <Bg className={css.cover}>
          <div className={css.sticky}>

            <BtnHamMenu
              className={cssMod.btnHamMenu}
              onOpen={onActOpenHamMenu}
            />

            <div className={css.titleSite} ref={this.refTitle} >
              <div>IDELIA</div>
              <div>MARS</div>
            </div>
          </div>
        </Bg>

        <NavMenu onSelect={noop} />
      </div>
    );
  }
}

export default Header;

function noop() {}
