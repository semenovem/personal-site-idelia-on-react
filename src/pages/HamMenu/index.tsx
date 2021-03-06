import React from 'react';
import cn from 'classnames';

import { ROUTES } from 'types/routes';
import { findValueByAttr } from 'utils/dom/findValueByAttr';
import BtnClose from 'cmp/BtnClose';

import cssTypography from 'styles/typography.module.css';
import cssCommon from 'styles/common.module.css';
import { withCtxPageMgr, Page, PageMgrProps, PageMgr } from 'ctx/PageMgr';
import css from './style.module.css';

interface OwnProps {
  className?: string;
}

type Props = OwnProps & PageMgrProps;

class HamMenu extends React.Component<Props> {
  private handleSelect = (event: React.MouseEvent) => {
    const id = findValueByAttr(
      event.target as HTMLElement,
      event.currentTarget as HTMLElement,
      'data-id'
    );

    if (!id) {
      return;
    }

    this.handleClose();
  };

  private handleClose = () => {
    PageMgr.close(PageMgr.Page.HAM_MENU);
  };

  private renderItems() {
    const style = cssTypography.hamMenuItem;

    const hash = window.location.hash;
    const routeItem = ROUTES.ALL.find(it => it.HASH === hash) || ROUTES.HEADER;

    return ROUTES.ORDER_HAM_MENU.map(it => (
      <a
        href={it.HASH}
        className={cn(style, routeItem.ID === it.ID && css.selected)}
        data-id={it.ID}
        key={it.ID}
      >
        {it.MENU_ITEM_NAME}
      </a>
    ));
  }

  public render() {
    const {
      className,
      pageMgr: { hasUserInteraction },
    } = this.props;

    return (
      <div className={cn(css.hamMenu, className, hasUserInteraction && css.visible)}>
        <BtnClose
          className={cssCommon.btnCloseOnAbsolutePosition}
          onClose={this.handleClose}
          hasUserInteraction={hasUserInteraction}
          aria-label="Close menu"
        />

        <nav className={cn(css.items)} onClick={this.handleSelect} aria-hidden>
          {this.renderItems()}
        </nav>
      </div>
    );
  }
}

export default withCtxPageMgr<OwnProps>(Page.HAM_MENU, HamMenu);
