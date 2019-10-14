import React from 'react';

import Link from 'sys/route/Link';

const Main: React.FC<{}> = () => (
  <div className={''}>
    music
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

export default Main;
