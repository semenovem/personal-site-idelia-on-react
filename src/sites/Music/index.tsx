import React, { useEffect } from 'react';

import { addCssClassToBody, removeCssClassToBody } from 'sys/bodyCss';

import PageMusic from 'App';

import css from './style.module.css';

const Music: React.FC<{}> = () => {
  useEffect(() => {
    addCssClassToBody(css.forPageMusic);

    return () => {
      removeCssClassToBody(css.forPageMusic);
    };
  });

  return <PageMusic />;
};

export default Music;
