import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import {withUserInteraction, PageMgrUserInteractionProps, PageMgr} from 'ctx/PageMgr';
import Portal from 'portals/PhotosViewer';
import ScrollX from 'cmp/ScrollX';

import Bg from './Background';
import { photos } from './photos';
import PhotosViewer, { setElem } from './PhotosViewer';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

type Props = PageMgrUserInteractionProps;

class Gallery extends React.Component<Props> {
  private handleClick = (id: string, elem: HTMLElement) => {
    setElem(elem as HTMLImageElement);
    PageMgr.open(PageMgr.Page.PHOTOS_VIEWER);
  };

  private handleClosePhotosViewer = () => {
    PageMgr.close(PageMgr.Page.PHOTOS_VIEWER);
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
          hasUserInteraction={this.props.hasUserInteraction}
        >
          {this.renderPhotos()}
        </ScrollX>

        <Portal>
          <PhotosViewer onClose={this.handleClosePhotosViewer} />
        </Portal>
      </div>
    );
  }
}

export default withUserInteraction(Gallery);
