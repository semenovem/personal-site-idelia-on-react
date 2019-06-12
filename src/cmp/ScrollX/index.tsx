import React from 'react';
import cn from 'classnames';

import Items from './Items';

import css from './style.module.css';

interface Props {
  className?: string;
  onClickItem(id: string): void;
  nameDataAttr: string;

  onTabIndex?: boolean;
}

class ScrollX extends React.Component<Props> {
  private readonly refItems: React.RefObject<Items>;
  private readonly refArrowL: React.RefObject<HTMLButtonElement>;
  private readonly refArrowR: React.RefObject<HTMLButtonElement>;

  private arrows = {
    l: false,
    r: false,
  };

  constructor(props: Props) {
    super(props);
    this.refItems = React.createRef();
    this.refArrowL = React.createRef();
    this.refArrowR = React.createRef();
  }

  private handleClickArrowL = () => {
    this.refItems.current && this.refItems.current.scrollToNextItemL();
  };

  private handleClickArrowR = () => {
    this.refItems.current && this.refItems.current.scrollToNextItemR();
  };

  private handleScrollingToEdge = (l: boolean, r: boolean) => {
    const arrows = this.arrows;

    if (arrows.l !== l && this.refArrowL.current) {
      this.refArrowL.current.classList[l ? 'add' : 'remove'](css.arrowOn);
      arrows.l = l;
    }

    if (arrows.r !== r && this.refArrowR.current) {
      this.refArrowR.current.classList[r ? 'add' : 'remove'](css.arrowOn);
      arrows.r = r;
    }
  };

  public render() {
    const { className, children, nameDataAttr, onClickItem, onTabIndex } = this.props;

    return (
      <div className={cn(className, css.scroll)}>
        <button
          className={cn(css.arrow, this.arrows.l && css.arrowOn)}
          ref={this.refArrowL}
          {...!onTabIndex && { tabIndex: -1 }}
          onClick={this.handleClickArrowL}
        />

        <Items
          nameDataAttr={nameDataAttr}
          onClick={onClickItem}
          ref={this.refItems}
          onScrollingToEdge={this.handleScrollingToEdge}
        >
          {children}
        </Items>

        <button
          className={cn(css.arrow, this.arrows.l && css.arrowOn)}
          data-arrow="r"
          ref={this.refArrowR}
          {...!onTabIndex && { tabIndex: -1 }}
          onClick={this.handleClickArrowR}
        />
      </div>
    );
  }
}

export default ScrollX;
