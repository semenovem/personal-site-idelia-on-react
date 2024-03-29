import React from 'react';

import { hasPreRendering } from 'sys/prerender';

import './global.css';

import Footer from 'mod/Footer';
import Item from './Item';

import css from './style.module.css';

export default function MainSinglePage() {
  if (hasPreRendering()) {
    return null;
  }

  return (
    <>
      <main className={css.main}>
        <Item href="/music" style={{ animationDelay: '500ms' }}>
          Idelia Mars Music
        </Item>

        <Item href="/see-my-voice" className={css.itemIndent}>
          See My Voice film
        </Item>
      </main>

      <Footer className={css.footer} />
    </>
  );
}
