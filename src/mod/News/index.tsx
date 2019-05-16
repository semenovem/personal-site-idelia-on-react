import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import {IModProps} from 'mod/types';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps extends IModProps {
}

interface IProps extends IOwnProps {
}

class News extends React.Component<IProps> {

  render() {
    const { offUserInteraction } = this.props;

    return (
      <div id={ROUTES.NEWS.HTML_ID} className={cn(cssMod.mod, css.news)}>
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.NEWS.TITLE}</h2>




      </div>
    );
  }
}

export default News;
