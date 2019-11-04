import React from 'react';

import GeneralFooter from 'mod/Footer';

import css from './css.module.css';

export default function Footer() {
  return (
    <div className={css.footer}>
      <GeneralFooter />
    </div>
  );
}
