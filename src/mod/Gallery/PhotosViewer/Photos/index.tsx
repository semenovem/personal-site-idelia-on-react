import React from 'react';
import cn from 'classnames';

import { withCtxWinSize, WinSizeProps } from 'ctx/WinSize';

import { getPhotoById, getPrevId, getNextId } from '../../getPhoto';

import css from './style.module.css';

interface OwnProps {
  className?: string;
  id: number;
}

interface State {
  prevId: number | null;
  currentId: number;
  nextId: number | null;
}

type Props = OwnProps & WinSizeProps;

class Photos extends React.Component<Props, State> {
  public state = {
    prevId: getPrevId(this.props.id),
    currentId: this.props.id,
    nextId: getNextId(this.props.id),
  };

  private handleArrowL = () => {
    const { prevId, currentId } = this.state;

    if (!prevId) {
      return;
    }

    this.setState({
      prevId: getPrevId(prevId),
      currentId: prevId,
      nextId: currentId,
    });
  };

  private handleArrowR = () => {
    const { currentId, nextId } = this.state;

    if (!nextId) {
      return;
    }

    this.setState({
      prevId: currentId,
      currentId: nextId,
      nextId: getNextId(nextId),
    });
  };

  public render() {
    const { winSize, className } = this.props;
    const { currentId, prevId, nextId } = this.state;
    const photo = getPhotoById(currentId, winSize, 'main');
    const photoPrev = prevId ? getPhotoById(prevId, winSize, 'main') : null;
    const photoNext = nextId ? getPhotoById(nextId, winSize, 'main') : null;

    return (
      <div className={cn(css.photos, className)}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={css.btnL} onClick={this.handleArrowL} />

        <div className={css.left}>
          {photoPrev && <img src={photoPrev.url} className={css.imgPreview} alt="" />}
        </div>

        <div className={css.arrowL} />

        <div className={css.center}>
          <img src={photo.url} alt="" className={css.center} />
        </div>

        <div className={css.arrowR} />

        <div className={css.right}>
          {photoNext && <img src={photoNext.url} className={css.imgPreview} alt="" />}
        </div>

        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={css.btnR} onClick={this.handleArrowR} />
      </div>
    );
  }
}

export default withCtxWinSize<OwnProps>(Photos);
