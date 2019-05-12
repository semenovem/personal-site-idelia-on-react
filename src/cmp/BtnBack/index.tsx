import React from 'react';
import cn from 'classnames';

import cssCommon from 'styles/common.module.css';
import css from './style.module.css';


interface IOwnProps {
  className: string;
  onBack: () => void;
}

interface IProps extends IOwnProps {}

const BtnBack: React.FC<IProps> = ({ className, onBack }) => (
  <button
    className={cn(cssCommon.resetBtnStyles, css.btn, className)}
    onClick={onBack}
  />
);

export default BtnBack;
