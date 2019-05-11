import React from 'react';
import cn from 'classnames';

import {MOD, IModItem} from 'types/routes';

import cssCommon from 'styles/common.module.css';
import cssTypography from 'styles/typography.module.css';
import css from './style.module.css';

interface IOwnProps {
  className: string;
  onSelect: () => void;
}

const styleItem = cn(cssCommon.resetLinkStyles, cssTypography.navMenuItem);

const groups = MOD.ORDER
  .filter(it => !it.FIRST)
  .map((it: IModItem): React.ReactNode => (
      <a href={it.ROUTE} className={styleItem} key={it.ID}>{it.MENU_ITEM_NAME}</a>
    )
  )
  .reduce((acc: Array<Array<React.ReactNode>>, it: React.ReactNode, i: number) => {
    const l = acc[acc.length - 1].length;

    if (l > 1) {
      acc.push([]);
    }

    if (acc.length > 1 && l === 1) {
      acc[acc.length - 1].push(renderDividerY(`k${i}`));
    }

    acc[acc.length -1].push(it);

    return acc;
  }, [[]]);


const NavMenu: React.FC<IOwnProps> = ({className}) => (
  <div className={cn(css.navMenu, className)}>


    {groups.map((its, i) => (
      <React.Fragment key={`i${i}`}>
        {i > 0 && (renderDivider())}
        <div className={css.row}>
          {its.map(it => it)}
        </div>
      </React.Fragment>
    ))}

  </div>
);

function renderDivider() {
  return (
    <div className={css.divider}>
      <span className={css.dividerLeft}/>
      <span className={css.dividerCenter}/>
      <span className={css.dividerRight}/>
    </div>
  );
}

function renderDividerY(key: string) {
  return (
    <div className={css.dividerY} key={key}>

    </div>
  );
}

export default NavMenu;
