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
  private handleClick = (id: string, elem: HTMLElement) => {

    console.log(elem);
  };


  private renderPhotos() {
    return photos.map(it => (
      <img
        key={it.url}
        src={it.url}
        className={css.img}
        data-id={it.id}
      />
    ));
  }

  public render() {
    return (
      <div id={ROUTES.GALLERY.HTML_ID} className={cn(cssMod.modFreePaddingSides, css.gallery)}>
        <Bg className={css.bg}/>
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.GALLERY.TITLE}</h2>

        <ScrollX
          className={css.photos}
          onClickItem={this.handleClick}
          nameDataAttr='data-id'
          onTabIndex={!this.props.offTabIndex}
        >
          {this.renderPhotos()}
        </ScrollX>

      </div>
    );
  }
}

export default withOffTabIndexCtx(Gallery);
