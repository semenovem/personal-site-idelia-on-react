import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

export interface IProps {
  className?: string;
  onOpen: () => void;
  offTabIndex?: boolean;
}

const BtnHamMenu: React.FC<IProps> = ({ className, onOpen, offTabIndex }) => (
  <button
    className={cn(css.btnHamMenu, className)}
    onClick={onOpen}
    {...(offTabIndex && { tabIndex: -1 })}
  />
);

export default BtnHamMenu;
