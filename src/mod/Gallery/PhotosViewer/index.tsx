import React from 'react';
import cn from 'classnames';

import { withCtxPageMgr, Page, PageMgrProps } from 'ctx/PageMgr';
import BtnClose from "cmp/BtnClose";

import Photos from './Photos';

import cssCommon from 'styles/common.module.css';
import css from './style.module.css';

interface OwnProps {
  onClose(): void;
}
type Props = OwnProps & PageMgrProps

class PhotosViewer extends React.Component<Props> {
  public shouldComponentUpdate({ pageMgr }: Props) {
    return this.props.pageMgr.topPage === Page.PHOTOS_VIEWER || pageMgr.topPage === Page.PHOTOS_VIEWER;
  }

  private handleClose = () => {
    const { onClose } = this.props;

    // TODO do hide up
    onClose();
  };

  public render() {
    const { pageMgr } = this.props;

    if (pageMgr.topPage !== Page.PHOTOS_VIEWER) {
      return null;
    }

    return (
      <div className={cn(css.photosViewer, css.showUp)}>
        <div className={css.bg} />
        <div className={css.photos}>
          <Photos id={storageId || 0} />
        </div>

        <BtnClose
          className={cssCommon.btnCloseOnAbsolutePosition}
          onClose={this.handleClose}
          hasUserInteraction={pageMgr.hasUserInteraction}
          aria-label="Close photo viewer"
        />
      </div>
    );
  }
}

export default withCtxPageMgr<OwnProps>(Page.PHOTOS_VIEWER, PhotosViewer);


let storageElem: HTMLImageElement | null = null;
let storageId: number | null = null;

export function setElem(el: HTMLImageElement, id: number) {
  storageElem = el;
  storageId = id;
}
