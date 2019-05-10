import React from 'react';
import cn from 'classnames';

import cssTypography from 'styles/typography.module.css';
import cssCommon from 'styles/common.module.css';
import css from './style.module.css';

interface IOwnProps {
  isOpen: boolean;
  className?: string;
  onClose: () => void;
}

interface IProps extends IOwnProps {
}

interface IState {
}

class HamMenu extends React.Component<IProps, IState> {

  public render() {
    const {className, isOpen, onClose} = this.props;

    return (
      <div className={cn(css.hamMenu, className, isOpen && css.open)}>

        <button className={cn(cssCommon.resetBtnStyles, css.btnClose)} onClick={onClose}/>

        <nav className={cn(css.items)}>
          <a className={cssTypography.hamMenuItem}>Home</a>
          <a className={cssTypography.hamMenuItem}>New</a>
          <a className={cssTypography.hamMenuItem}>Bio</a>
          <a className={cssTypography.hamMenuItem}>Music</a>
          <a className={cssTypography.hamMenuItem}>Videos</a>
          <a className={cssTypography.hamMenuItem}>Gallery</a>
          <a className={cssTypography.hamMenuItem}>Contacts</a>
        </nav>
      </div>
    );
  }
}

export default HamMenu;
