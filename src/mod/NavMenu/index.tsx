import React from 'react';
import cn from 'classnames';

import {ROUTES, IRouteItem} from 'types/routes';

import cssTypography from 'styles/typography.module.css';
import css from './style.module.css';

interface IOwnProps {
  className?: string;
  onSelect: () => void;
  offTabIndex?: boolean;
}

export interface IProps extends IOwnProps {}

function NavMenu({className, offTabIndex}: IProps): React.ReactElement {
  const groups = getGroup(offTabIndex);

  return (
    <div className={cn(css.navMenu, className)}>
      <div className={css.content}>
        {groups.map((its, i) => (
          <div className={css.contentItem} key={`i${i}`}>
            {i > 0 && (renderDivider())}
            <div className={css.row}>
              {its.map(it => it)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getGroup(offTabIndex?: boolean) {
  const styleItem = cssTypography.navMenuItem;

  // TODO to temporarily hide section NEWS `it.ID === 'NEWS'`, because it work ip progress
  return ROUTES.ORDER_NAV_MENU
    .map((it: IRouteItem): React.ReactNode => (
        <a
          href={it.HASH}
          className={styleItem}
          key={it.ID}
          { ...offTabIndex && { tabIndex: -1}}
          { ...it.ID === 'NEWS' && {style: { display: 'none', }}}
        >
          {it.MENU_ITEM_NAME}
        </a>
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

      acc[acc.length - 1].push(it);

      return acc;
    }, [[]]);
}

function renderDivider() {
  return (
    <div className={css.divider}>
      <span className={css.dividerCenter}/>
    </div>
  );
}

function renderDividerY(key: string) {
  return (<div className={css.dividerY} key={key}/>);
}

export default NavMenu;
