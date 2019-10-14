import React from 'react';
import cn from 'classnames';

import Bg from './Bg';

import css from './style.module.css';

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }: Props) => (
  <div className={cn(css.header, className)}>
    <Bg />
    movies/see my voice/head
  </div>
);

export default Header;
