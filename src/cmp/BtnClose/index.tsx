import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface Props {
  className?: string;
  onClose(): void;
  hasUserInteraction: boolean;
}

const BtnClose: React.FC<Props> = ({ className, onClose }) => (
  <button
    className={cn(css.btn, className)}
    onClick={onClose}
  />
);

export default BtnClose;
