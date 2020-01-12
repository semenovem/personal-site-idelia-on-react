import React from 'react';
import cn from 'classnames';

import { WinSize, WinSizeCtx } from 'ctx/WinSize';

import award001 from './assets/award001.png';
import award002 from './assets/award002.png';
import award003 from './assets/award003.png';
import award004 from './assets/award004.png';
import award005 from './assets/award005.png';
import award006 from './assets/award006.png';

import css from './css.module.css';

export default function Awards() {
  const winSize = React.useContext(WinSizeCtx);

  const isMobile = winSize < WinSize.MD;

  return (
    <div className={css.awards}>
      <h3 className={css.title}>Awards</h3>

      {isMobile && (
        <div className={css.wrap}>
          <div className={css.row}>
            <img src={award001} className={css.item} alt="" />
            <img src={award003} className={css.item} alt="" />
          </div>

          <div className={cn(css.indentTop, css.row)}>
            <img src={award005} className={css.item} alt="" />
            <img src={award004} className={css.item} alt="" />
          </div>

          <div className={cn(css.indentTop, css.row)}>
            <img src={award006} className={css.item} alt="" />
            <img src={award002} className={css.item} alt="" />
          </div>

          {/*<img src={award002} className={cn(css.item, css.indentTop)} alt="" />*/}
        </div>
      )}

      {!isMobile && (
        <div className={cn(css.wrap, css.row)}>
          <div className={css.row}>
            <img src={award001} className={css.item} alt="" />
            <img src={award002} className={css.item} alt="" />
            <img src={award003} className={css.item} alt="" />
          </div>

          <div className={cn(css.row, css.indentTop)}>
            <img src={award005} className={css.item} alt="" />
            <img src={award004} className={css.item} alt="" />
            <img src={award006} className={css.item} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
