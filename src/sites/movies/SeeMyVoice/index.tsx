import React, { useEffect } from 'react';

import { addCssClassToBody, removeCssClassToBody } from 'sys/bodyCss';
import Header from 'sites/movies/SeeMyVoice/Header';

import css from './style.module.css';

function SeeMyVoice() {
  useEffect(() => {
    addCssClassToBody(css.seeMyVoice);

    return () => {
      removeCssClassToBody(css.seeMyVoice);
    };
  }, []);

  return (
    <div className={css.movies}>
      <Header />

      movies
    </div>
  );
}

export default SeeMyVoice;
