import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

export interface Props {
  className?: string;
  onOpen: () => void;
  hasUserInteraction?: boolean;
}

const BtnHamMenu: React.FC<Props> = ({ className, onOpen, hasUserInteraction }: Props) => (
  <button
    className={cn(css.btnHamMenu, className)}
    onClick={onOpen}
    {...(!hasUserInteraction && { tabIndex: -1 })}
    type="button"
    aria-label="Open menu"
  />
);

export default BtnHamMenu;
