import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface Props {
  className?: string;
  children: React.ReactNode;
  href: string;
  style?: { [key: string]: string };
}

function Item({ children, href, className, ...rest }: Props) {
  return (
    <a className={cn(css.item, className)} href={href} {...rest}>
      {children}
    </a>
  );
}

export default Item;
