import React from 'react';
import cn from 'classnames';

// import MOD_HTML_ID from 'types/routes';

import cssCommon from 'styles/common.module.css';
import css from './style.module.css';


interface IOwnProps {
  className: string;
  onSelect: () => void;
}

const NavMenu: React.FC<IOwnProps> = ({className}) => (
  <div className={cn(css.navMenu, className)}>

    <div>
      <a href="#music" className={cssCommon.resetLinkStyles}>Music</a>
      <a href="#videos" className={cssCommon.resetLinkStyles}>Videos</a>
    </div>

    <div>
      <a href="#news" className={cssCommon.resetLinkStyles}>News</a>
      <a href="#contacts" className={cssCommon.resetLinkStyles}>Contacts</a>
    </div>

  </div>
);

export default NavMenu;
