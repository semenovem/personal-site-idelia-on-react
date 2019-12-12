import React from 'react';

import GeneralFooter from 'mod/Footer';

import logo01 from './assets/logo01.png';
import logo02 from './assets/logo02.png';
import logo03 from './assets/logo03.png';
import logo04 from './assets/logo04.png';
import logo05 from './assets/logo05.png';

import css from './css.module.css';

export default function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.bg}>
        <div className={css.logos}>
          <img src={logo01} className={css.item} alt="" />
          <img src={logo02} className={css.item} alt="" />
          <img src={logo03} className={css.item} alt="" />
          <img src={logo04} className={css.item} alt="" />
          <img src={logo05} className={css.item} alt="" />
        </div>
      </div>

      <GeneralFooter />
    </div>
  );
}
