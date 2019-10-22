import React from 'react';

import Footer from 'mod/Footer';
import Item from './Item';

import css from './style.module.css';

interface Props {
  style?: { [key: string]: string };
}

export default function MainSinglePage({ style }: Props) {
  return (
    <div className={css.page} style={style}>
      <main className={css.main}>
        <Item href="/music" style={{ animationDelay: '500ms' }}>
          Idelia Mars Music site
        </Item>

        <Item href="/movies" className={css.itemIndent}>
          movie My Voice
        </Item>
      </main>

      <Footer className={css.footer} />
    </div>
  );
}
