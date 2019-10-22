import React from 'react';
import cn from 'classnames';

import { ROUTES } from 'types/routes';
import { findValueByAttr } from 'utils/dom/findValueByAttr';
import BtnClose from 'cmp/BtnClose';

import cssTypography from 'pages/SinglePage/styles/typography.module.css';
import cssCommon from 'pages/SinglePage/styles/common.module.css';
import { withCtxMenu, MenuProps } from 'ctx/Menu';

import css from './style.module.css';

interface OwnProps {
  className?: string;
}

type Props = OwnProps & MenuProps;

class HamMenu extends React.Component<Props> {
  private static renderItems() {
    const style = cssTypography.hamMenuItem;

    const { hash } = window.location;
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
    this.props.menu.close();
  };

  public render() {
    const { className, menu } = this.props;

    const hasUserInteraction = menu.isOpen;

    return (
      <div className={cn(css.hamMenu, className, hasUserInteraction && css.visible)}>
        <BtnClose
          className={cssCommon.btnCloseOnAbsolutePosition}
          onClose={this.handleClose}
          hasUserInteraction={hasUserInteraction}
          aria-label="Close menu"
        />

        <nav className={cn(css.items)} onClick={this.handleSelect} aria-hidden>
          {HamMenu.renderItems()}
        </nav>
      </div>
    );
  }
}

export default withCtxMenu(HamMenu);
