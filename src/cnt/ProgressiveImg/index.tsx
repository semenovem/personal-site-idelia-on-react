import React from "react";
import Background, { IOwnProps as IOwnPropsBackground } from './Background';
import Image from './Image';
import * as T from './types';

export {
  Background,
  Image,

  backgroundApplyParams,
}






function backgroundApplyParams(params: T.IProgressiveImgParams) {
  function BackgroundApplyParams(props: IOwnPropsBackground) {
    return (
      <Background params={params} {...props} />
    );
  }

  BackgroundApplyParams.displayName = `Background(${Background.displayName || Background.name || 'Undefined'})`;

  return BackgroundApplyParams;
}


