import React from 'react';
import cn from 'classnames';

import {ROUTES, IRouteItem} from 'types/routes';
import findValueByDataAttr from 'utils/findValueByElemAttr';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps {
  isShow: boolean;
  className?: string;
  onClose: () => void;
  onSelect: (id: IRouteItem['ID']) => void;
}

interface IProps extends IOwnProps {
}

interface IState {
}

class HamMenu extends React.Component<IProps, IState> {
  public componentWillMount(): void {
    window.addEventListener('keyup', this.handleKeyUp)
  }

  public componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  private handleKeyUp = (event: KeyboardEvent): void => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  private handleSelect = (event: React.MouseEvent) => {
    const id = findValueByDataAttr(event.target as HTMLElement, event.currentTarget as HTMLElement, 'data-id');

    if (!id) {
      return;
    }

    this.props.onSelect(id);
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
    const {className, isShow, onClose} = this.props;

    return (
      <div className={cn(css.hamMenu, className, isShow && css.visible)}>
        <button className={cn(cssMod.btnCloseHamMenu, css.btnClose)} onClick={onClose}/>

        <nav className={cn(css.items)} onClick={this.handleSelect}>
          {this.renderItems()}
        </nav>
      </div>
    );
  }
}

export default HamMenu;
