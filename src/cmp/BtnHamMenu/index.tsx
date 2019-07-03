import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

export interface IProps {
  className?: string;
  onOpen: () => void;
  hasUserInteraction?: boolean;
}

const BtnHamMenu: React.FC<IProps> = ({ className, onOpen, hasUserInteraction }) => (
  <button
    className={cn(css.btnHamMenu, className)}
    onClick={onOpen}
    {...!hasUserInteraction && { tabIndex: -1 }}
    type="button"
    aria-label="Open menu"
  />
);

export default BtnHamMenu;
