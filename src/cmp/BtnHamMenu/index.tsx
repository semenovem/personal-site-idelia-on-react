import React from 'react';
import cn from 'classnames';

import cssCommon from 'styles/common.module.css';
import css from './style.module.css';


interface IOwnProps {
  className: string;
  onOpen: () => void;
}

const BtnHamMenu: React.FC<IOwnProps> = ({ className, onOpen }) => (
  <button
    className={cn(cssCommon.resetBtnStyles, css.hamMenu, className)}
    onClick={onOpen}
  />
);

export default BtnHamMenu;
