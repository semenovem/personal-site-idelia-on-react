import React from 'react';
import cn from 'classnames';

import { ROUTES } from 'types/routes';
import { withUserInteraction, PageMgrUserInteractionProps } from 'ctx/PageMgr';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import Bg from './Background';
import css from './style.module.css';

interface OwnProps extends PageMgrUserInteractionProps {}

// TODO wait implementation
// eslint-disable-next-line react/prefer-stateless-function
class News extends React.Component<OwnProps> {
  public render() {
    // const {  } = this.props;

    return (
      <div id={ROUTES.NEWS.HTML_ID} className={cn(cssMod.mod, css.news)}>
        <Bg className={css.bg} />
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.NEWS.TITLE}</h2>
      </div>
    );
  }
}

export default withUserInteraction(News);
