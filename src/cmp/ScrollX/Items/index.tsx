import React from 'react';
import cn from 'classnames';

import { findElemByAttr } from 'utils/dom/findElemByAttr';
import { findElemBeyondVisibility, Direction } from 'utils/dom/findElemBeyondVisibility';
import css from './style.module.css';

interface Props {
  className?: string;
  onClick?: onClickProp;
  nameDataAttr: string;
  onScrollingToEdge(l: boolean, r: boolean): void;
}

class Items extends React.Component<Props> {
  private arrows = {
    l: false,
    r: false,
  };

  private readonly ref: React.RefObject<HTMLDivElement>;

  public constructor(props: Props) {
    super(props);

    this.ref = React.createRef();
  }

  public componentDidMount(): void {
    const el = this.ref.current;
    if (el) {
      el.addEventListener('scroll', this.handleScroll);
    }

    if (React.Children.count(this.props.children) > 0) {
      this.waitingPaint();
    }
  }

  public componentWillUnmount(): void {
    if (this.ref.current) {
      this.ref.current.removeEventListener('scroll', this.handleScroll);
    } else {
      // eslint-disable-next-line no-console
      console.warn('check remove handler onscroll pls');
    }
  }

  public scrollToNextItemL() {
    if (this.ref.current) {
      const elem = findElemBeyondVisibility(
        Direction.LEFT,
        this.ref.current,
        this.props.nameDataAttr
      );

      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
    }
  }

  public scrollToNextItemR() {
    if (this.ref.current) {
      const elem = findElemBeyondVisibility(
        Direction.RIGHT,
        this.ref.current,
        this.props.nameDataAttr
      );

      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', inline: 'end', block: 'nearest' });
      }
    }
  }

  private waitingPaint = () => {
    const el = this.ref.current;

    if (el && !el.clientWidth) {
      setTimeout(this.waitingPaint, 100);
    } else {
      this.defScrollingToEdge();
    }
  };

  private defScrollingToEdge = () => {
    const el = this.ref.current;

    if (!el) {
      return;
    }

    const width = el.clientWidth;
    const scrollWidth = el.scrollWidth;
    const leftScroll = el.scrollLeft;
    let l, r;

    if (scrollWidth > width + 10) {
      l = leftScroll > 10;
      r = scrollWidth > width + leftScroll + 10;
    } else {
      l = r = false;
    }

    if (this.arrows.l !== l || this.arrows.r !== r) {
      this.props.onScrollingToEdge(l, r);
      this.arrows.l = l;
      this.arrows.r = r;
    }
  };

  private handleScroll = () => {
    this.defScrollingToEdge();
  };

  private handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const { onClick, nameDataAttr } = this.props;

    if (!onClick) {
      return;
    }

    const elem = findElemByAttr(event.target as HTMLElement, event.currentTarget, nameDataAttr);

    if (elem) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      onClick(elem.getAttribute(nameDataAttr)!, elem);
    }
  };

  public render() {
    const { className, children } = this.props;

    return (
      <div
        className={cn(css.items, className)}
        ref={this.ref}
        onClick={this.handleClick}
        aria-hidden
      >
        {children}
      </div>
    );
  }
}

export default Items;

export type onClickProp = (id: string, elem: HTMLElement) => void;
