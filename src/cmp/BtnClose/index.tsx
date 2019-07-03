import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface Props {
  className?: string;
  onClose(): void;
  hasUserInteraction: boolean;
}

const BtnClose: React.FC<Props> = ({ className, onClose, hasUserInteraction, ...rest }) => (
  <button
    className={cn(css.btn, className)}
    onClick={onClose}
    type="button"
    {...!hasUserInteraction && {tabIndex: -1}}
    {...rest}
  />
);

export default BtnClose;
