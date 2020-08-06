import React from 'react';

import GeneralFooter from 'mod/Footer';

import css from './css.module.css';

interface Props {
  instagram?: {
    URL: string;
    ALT: string;
  };
}

export default function Footer({ instagram }: Props) {
  return (
    <div className={css.footer}>
      <div className={css.bg} />

      <GeneralFooter instagram={instagram} />
    </div>
  );
}
