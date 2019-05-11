import React from 'react';
import cn from 'classnames';

import {MOD} from 'types/routes';
import findValueByDataAttr from 'utils/findValueByElemAttr';
import { IModItem } from 'types/routes';

import cssTypography from 'styles/typography.module.css';
import cssCommon from 'styles/common.module.css';
import css from './style.module.css';

interface IOwnProps {
  isOpen: boolean;
  className?: string;
  onClose: () => void;
  onSelect: (id: IModItem['ID']) => void;
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
    const style = cn(cssTypography.hamMenuItem, cssCommon.resetLinkStyles);

    return MOD.ORDER.map(it => (
      <a href={it.ROUTE} className={style} data-id={it.ID} key={it.ID}>
        {it.MENU_ITEM_NAME}
      </a>
    ));
  }

  public render() {
    const {className, isOpen, onClose} = this.props;

    return (
      <div className={cn(css.hamMenu, className, isOpen && css.open)}>

        <button className={cn(cssCommon.resetBtnStyles, css.btnClose)} onClick={onClose}/>

        <nav className={cn(css.items)} onClick={this.handleSelect}>
          {this.renderItems()}
        </nav>
      </div>
    );
  }
}

export default HamMenu;
