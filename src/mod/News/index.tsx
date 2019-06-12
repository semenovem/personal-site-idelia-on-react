import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import { withOffTabIndexCtx, IOffTabIndex} from 'ctx/OffTabIndex';
import Bg from './Background';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps extends IOffTabIndex {
}

class News extends React.Component<IOwnProps> {

  render() {
    // const {  } = this.props;

    return (
      <Bg id={ROUTES.NEWS.HTML_ID} className={cn(cssMod.mod, css.news)}>
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.NEWS.TITLE}</h2>




      </Bg>
    );
  }
}

export default withOffTabIndexCtx(News);
