import React, { useState, useEffect } from 'react';

import { hasPreRendering } from 'sys/prerender';
import { addCssClassToBody, removeCssClassToBody } from 'sys/bodyCss';

import MainSinglePage from './Page';

import css from './style.module.css';

const Main: React.FC<{}> = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!hasPreRendering()) {
      setTimeout(() => setLoaded(true), 200);
    }

    addCssClassToBody(css.forPageMain);

    return () => {
      removeCssClassToBody(css.forPageMain);
    };
  }, []);

  const style = loaded ? undefined : { display: 'none' };

  return <MainSinglePage style={style} />;
};

export default Main;
