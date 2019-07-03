import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface OwnProps {
  className: string;
  onBack: () => void;
}

interface Props extends OwnProps {}

const BtnBack: React.FC<Props> = ({ className, onBack }: Props) => (
  <button className={cn(css.btn, className)} onClick={onBack} type="button" />
);

export default BtnBack;
