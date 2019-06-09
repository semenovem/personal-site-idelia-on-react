import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import { withOffTabIndexCtx, IOffTabIndex } from 'ctx/OffTabIndex';
import ScrollX from 'cmp/ScrollX';

import Bg from './Background';
import { photos } from './photos';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps extends IOffTabIndex {
}


class Gallery extends React.Component<IOwnProps> {

  private handleClick = (id: string) => {
    console.log(id);
  };


  private renderPhotos() {

    return photos.map(it => (
      <img
        key={it.url}
        src={it.url}
        className={css.img}
      />
    ));
  }

  public render() {
    return (
      <Bg id={ROUTES.GALLERY.HTML_ID} className={cn(cssMod.modFreePaddingSides, css.gallery)}>
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.GALLERY.TITLE}</h2>

        <ScrollX
          className={css.photos}
          onClickItem={this.handleClick}
          nameAttr='data-id'
        >
          {this.renderPhotos()}
        </ScrollX>

      </Bg>
    );
  }
}

export default withOffTabIndexCtx(Gallery);
