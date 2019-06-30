import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import {withUserInteraction, PageMgrUserInteractionProps, PageMgr} from 'ctx/PageMgr';
import { withCtxWinSize, WinSize, IWinSizeProps, getSmaller, getCodeWinSize } from 'ctx/WinSize';
import Portal from 'portals/PhotosViewer';
import ScrollX from 'cmp/ScrollX';

import Bg from './Background';
import { photos } from './importPhotos';

import PhotosViewer, { setElem } from './PhotosViewer';

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

type Props = PageMgrUserInteractionProps & IWinSizeProps;

class Gallery extends React.Component<Props> {
  private handleClick = (id: string, elem: HTMLElement) => {
    setElem(elem as HTMLImageElement);
    PageMgr.open(PageMgr.Page.PHOTOS_VIEWER);
  };

  private handleClosePhotosViewer = () => {
    PageMgr.close(PageMgr.Page.PHOTOS_VIEWER);
  };

  private renderPhotos() {
    return photos.map((it: any) => {
      const photo = getUrlPhoto(it, this.props.winSize, 'preview');

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

export default withCtxWinSize(withUserInteraction(Gallery));


/**
 * @param data
 * @param winSize
 * @param kind
 */
function getUrlPhoto(data: any, winSize: WinSize, kind: string): { url: string; width: number; height: number } {
  let w: WinSize | null = winSize;
  let codeWinSize: string;

  while(w !== null) {
    codeWinSize = getCodeWinSize(w).toLowerCase();

    if (data[codeWinSize] && data[codeWinSize][kind]) {
      const d = data[codeWinSize][kind];

      return {
        url: d.url,
        width: d.width,
        height: d.height,
      };
    }
    w = getSmaller(w);
  }

  return {
    url: '',
    width: 100,
    height: 100,
  };
}
