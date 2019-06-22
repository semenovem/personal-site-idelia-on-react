import React from 'react';
import cn from 'classnames';

import Items, { onClickProp } from './Items';

import css from './style.module.css';

interface Props {
  className?: string;
  onClickItem?: onClickProp;
  nameDataAttr: string;

  hasUserInteraction?: boolean;
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

  private setStyleBtn(elem: HTMLButtonElement, isShow: boolean): void {
    elem.classList[isShow ? 'add' : 'remove'](css.arrowShowUp);
    elem.disabled = !isShow;
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
      this.setStyleBtn(this.refArrowL.current, l);
      arrows.l = l;
    }

    if (arrows.r !== r && this.refArrowR.current) {
      this.setStyleBtn(this.refArrowR.current, r);
      arrows.r = r;
    }
  };

  public render() {
    const { className, children, nameDataAttr, onClickItem, hasUserInteraction } = this.props;
    const arrows = this.arrows;

    return (
      <div className={cn(className, css.scroll)}>
        <button
          className={cn(css.arrow, arrows.l && css.arrowShowUp)}
          type="button"
          disabled={arrows.l}
          ref={this.refArrowL}
          {...!hasUserInteraction && { tabIndex: -1 }}
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
          className={cn(css.arrow, arrows.r && css.arrowShowUp)}
          type="button"
          disabled={arrows.r}
          ref={this.refArrowR}
          {...!hasUserInteraction && { tabIndex: -1 }}
          onClick={this.handleClickArrowR}
        />
      </div>
    );
  }
}

export default ScrollX;
