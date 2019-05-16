import React from 'react';
import cn from 'classnames';

import {ROUTES, IRouteItem} from 'types/routes';

import cssCommon from 'styles/common.module.css';
import cssTypography from 'styles/typography.module.css';
import css from './style.module.css';

interface IOwnProps {
  className?: string;
  onSelect: () => void;
  offUserInteraction?: boolean;
}

function getGroup(offUserInteraction?: boolean) {
  const styleItem = cn(cssCommon.resetLinkStyles, cssTypography.navMenuItem);

  return ROUTES.ORDER_NAV_MENU
    .map((it: IRouteItem): React.ReactNode => (
        <a
          href={it.HASH}
          className={styleItem}
          key={it.ID}
          { ...(offUserInteraction && { tabIndex: -1})}
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

const NavMenu: React.FC<IOwnProps> = ({className, offUserInteraction}) => {
  const groups = getGroup(offUserInteraction);


  return (
    <div className={cn(css.navMenu, className)}>
      <div className={css.content}>
        {groups.map((its, i) => (
          <React.Fragment key={`i${i}`}>
            {i > 0 && (renderDivider())}
            <div className={css.row}>
              {its.map(it => it)}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

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
