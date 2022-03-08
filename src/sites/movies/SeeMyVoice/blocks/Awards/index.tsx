import React from 'react';

import award001 from './assets/award001.png';
import award002 from './assets/award002.png';
import award003 from './assets/award003.png';
import award004 from './assets/award004.png';
import award005 from './assets/award005.png';
import award006 from './assets/award006.png';
import award007 from './assets/award007.png';
import award008 from './assets/award008.png';
import award009 from './assets/award009.png';
import award010 from './assets/award010.png';
import award011 from './assets/award011.png';

import css from './css.module.css';

export default function Awards() {
  return (
    <div className={css.awards}>
      <h3 className={css.title}>Awards</h3>

      <div className={css.wrap}>{renderAwards()}</div>
    </div>
  );
}

const imgAwards = [
  award001,
  award002,
  award003,
  award004,
  award005,
  award006,
  award007,
  award008,
  award009,
  award010,
  award011,
];

function renderAwards() {
  // eslint-disable-next-line react/no-array-index-key
  return imgAwards.map((it, i) => <img src={it} className={css.item} alt="" key={i} />);
}
