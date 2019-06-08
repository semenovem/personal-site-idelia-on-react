import React from 'react';
import cn from 'classnames';

import { findValueByElemAttr } from "utils/dom";

import css from './style.module.css';

interface IOwnProps {
  className?: string;
  onClickItem(id: string): void;
  nameAttr: string;
}

class ScrollX extends React.Component<IOwnProps> {
  private handleClickArrow = (_event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log('click');
  };

  private handleClickItem = (event: React.MouseEvent<HTMLElement>) => {
    const { nameAttr, onClickItem } = this.props;
    const value = findValueByElemAttr(event.target as HTMLElement, event.currentTarget, nameAttr);

    if (value) {
      onClickItem(value);
    }
  };

  public render() {
    const { className, children } = this.props;

    return (
      <div className={cn(className, css.scroll)}>
        <button className={css.arrow} onClick={this.handleClickArrow}/>

        <div className={css.items} onClick={this.handleClickItem}>
          {children}
        </div>

        <button className={css.arrow} onClick={this.handleClickArrow}/>
      </div>
    );
  }
}

export default ScrollX;
