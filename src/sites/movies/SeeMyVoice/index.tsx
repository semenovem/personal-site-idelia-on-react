import React from 'react';
import { Helmet } from 'react-helmet';

import './styles/global.css';

import { hasPreRendering } from 'sys/prerender';
import Header from './blocks/Header';
import Awards from './blocks/Awards';
import DirectorNote from './blocks/DirectorNote';
import Footer from './blocks/Footer';
import Photos from './blocks/Photos';
import Bio from './blocks/Bio';

import css from './style.module.css';

function SeeMyVoice() {
  if (hasPreRendering()) {
    return null;
  }
  return (
    <>
      <Helmet>
        <title>Idelia site film See My Voice</title>
        <meta
          name="description"
          content="See My Voice - Mystery Drama Short Film :  Every song has a story. Annie feels a deep connection with music, as she has since she was a little girl. However, life events forced her to give up on her dream. Only a mystery woman on the edge of life and death can help her. But will this mystery woman be able to help bring back Annie’s dream or has Annie's fear grown bigger than her faith?"
        />
        <meta name="keywords" content="director, singer, pop, songs, Idelia Mars" />
        <meta name="theme-color" content="#1C1E27" />
      </Helmet>

      <Header />
      <DirectorNote />

      <Bio />

      <hr className={css.line} />

      <Awards />

      <Photos />
      <Footer />
    </>
  );
}

export default SeeMyVoice;
