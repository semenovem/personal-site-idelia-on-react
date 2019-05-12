import React from 'react';
import cn from 'classnames';

import cssCommon from 'styles/common.module.css';
import css from './style.module.css';


interface IOwnProps {
  className: string;
  onOpen: () => void;
  offUserInteraction?: boolean;
}

interface IProps extends IOwnProps {}

const BtnHamMenu: React.FC<IProps> = ({ className, onOpen, offUserInteraction }) => (
  <button
    className={cn(cssCommon.resetBtnStyles, css.hamMenu, className)}
    onClick={onOpen}
    {...(offUserInteraction && { tabIndex: -1})}
  />
);

export default BtnHamMenu;
