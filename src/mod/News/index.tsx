import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import { withOffTabIndexCtx, IOffTabIndex} from 'ctx/OffTabIndex';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps extends IOffTabIndex {
}

class News extends React.Component<IOwnProps> {

  render() {
    // const {  } = this.props;

    return (
      <div id={ROUTES.NEWS.HTML_ID} className={cn(cssMod.mod, css.news)}>
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.NEWS.TITLE}</h2>




      </div>
    );
  }
}

export default withOffTabIndexCtx(News);
