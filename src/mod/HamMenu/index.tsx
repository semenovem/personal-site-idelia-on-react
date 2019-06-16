import React from 'react';
import cn from 'classnames';

import {ROUTES, IRouteItem} from 'types/routes';
import { findValueByElemAttr } from 'utils/dom/findValueByElemAttr';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';
import {IBodyScrollProps, withCtxBodyScroll} from "ctx/BodyScroll";


interface IOwnProps {
  isShow: boolean;
  className?: string;
  onClose: () => void;
  onSelect: (id: IRouteItem['ID']) => void;
}

type IProps = IOwnProps & IBodyScrollProps

class HamMenu extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);

    if (props.isShow) {
      props.bodyScroll.off();
    }
  }

  public componentDidUpdate(prevProps: Readonly<IOwnProps & IBodyScrollProps>): void {
    const {isShow, bodyScroll} = this.props;

    if (prevProps.isShow !== isShow) {
      isShow ? bodyScroll.off() : bodyScroll.on();
    }
  }

  private handleSelect = (event: React.MouseEvent) => {
    const id = findValueByElemAttr(event.target as HTMLElement, event.currentTarget as HTMLElement, 'data-id');

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

export default withCtxBodyScroll<IOwnProps>(HamMenu);
