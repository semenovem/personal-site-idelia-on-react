import React from 'react';
import { Helmet } from 'react-helmet';

import './styles/global.css';

import Header from './blocks/Header';
import Awards from './blocks/Awards';
import DirectorNote from './blocks/DirectorNote';
import Footer from './blocks/Footer';
import Photos from './blocks/Photos';
import Bio from './blocks/Bio';

function SeeMyVoice() {
  return (
    <>
      <Helmet>
        <title>Idelia site film See My Voice</title>
        <meta name="description" content="Idelia site film See My Voice" />
      </Helmet>

      <Header />
      <DirectorNote />

      <Bio />
      <Awards />

      <Photos />
      <Footer />
    </>
  );
}

export default SeeMyVoice;
