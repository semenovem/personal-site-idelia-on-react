import React from 'react';
import Header from 'mod/Header';

import { MOD } from 'types/routes';


const SinglePage: React.FC = () => {

  return (
    <>
      <Header
        htmlId={MOD.HEADER.htmlId}
      />

      <header>header</header>
      <main>main</main>
      <footer>footer</footer>
    </>
  );
};

export default SinglePage;
