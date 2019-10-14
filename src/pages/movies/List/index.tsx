import React from 'react';

import Link from 'sys/route/Link';

import css from './style.module.css';

const Movies: React.FC<{}> = () => (
  <div className={css.movies}>
    movies
    <br />
    <br />

    <Link href="/">main</Link>
    <br />
    <Link href="music">music</Link>
    <br />
    <Link href="movies" titleOfPage="new title of page">
      movies
    </Link>
  </div>
);

export default Movies;
