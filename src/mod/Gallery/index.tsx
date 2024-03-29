import React from 'react';
import cn from 'classnames';

import { ROUTES } from 'types/routes';
import { withUserInteraction, PageMgrUserInteractionProps, PageMgr } from 'ctx/PageMgr';
import { withCtxWinSize, WinSizeProps } from 'ctx/WinSize';
import Portal from 'portals/PhotosViewer';
import ScrollX from 'cmp/ScrollX';

import cssTypography from 'sites/Music/styles/typography.module.css';
import { hasPreRendering } from 'sys/prerender';
import Bg from './Background';
import { getPhoto } from './getPhoto';
import { photos } from './importPhotos';

import PhotosViewer, { setElem } from './PhotosViewer';

import cssMod from 'mod/style.module.css';
import css from './style.module.css';

type Props = PageMgrUserInteractionProps & WinSizeProps;

class Gallery extends React.Component<Props> {
  private handleClick = (id: string, elem: HTMLElement) => {
    setElem(elem as HTMLImageElement, +id);
    PageMgr.open(PageMgr.Page.PHOTOS_VIEWER);
  };

  private handleClosePhotosViewer = () => {
    PageMgr.close(PageMgr.Page.PHOTOS_VIEWER);
  };

  private renderPhotos() {
    if (hasPreRendering()) {
      return null;
    }

    return photos.map((it: PhotoGent) => {
      const photo = getPhoto(it, this.props.winSize, 'preview');

      return (
        <img
          key={it.id}
          src={photo.url}
          className={css.img}
          data-id={it.id}
          alt=""
          width={photo.width}
          height={photo.height}
        />
      );
    });
  }

  public render() {
    const props = this.props;

    return (
      <div id={ROUTES.GALLERY.HTML_ID} className={cn(cssMod.mod, css.gallery)}>
        <Bg className={css.bg} />
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.GALLERY.TITLE}</h2>

        <ScrollX
          className={css.photos}
          onClickItem={this.handleClick}
          nameDataAttr="data-id"
          hasUserInteraction={props.hasUserInteraction}
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

export default withCtxWinSize(withUserInteraction(Gallery));

interface PhotoGent {
  id: number;
  xs?: PhotoGentItem;
  sm?: PhotoGentItem;
  md?: PhotoGentItem;
  lg?: PhotoGentItem;
  xl?: PhotoGentItem;
}

interface PhotoGentItem {
  main?: {
    url: string;
    width: number;
    height: number;
  };
  preview?: {
    url: string;
    width: number;
    height: number;
  };
  blurred?: {
    url: string;
    width: number;
    height: number;
  };
}
