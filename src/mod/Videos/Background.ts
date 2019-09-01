import { WinSize } from 'ctx/WinSize';
import { CountdownLevel } from 'ctx/Countdown';
import { backgroundApplyParams } from 'cnt/ProgressiveImg';

// import xs from './assets/bg/bg_xs.jpg';
// import sm from './assets/bg/bg_sm.jpg';
// import md from './assets/bg/bg_md.jpg';
// import lg from './assets/bg/bg_lg.jpg';
// import xl from './assets/bg/bg_xl.jpg';

import orig from './assets/bg/bg_orig.jpg';

export const params = {
  [WinSize.XS]: {
    [CountdownLevel.MINOR]: orig,
  },

  // [WinSize.XS]: {
  //   [CountdownLevel.MINOR]: xs,
  // },
  // [WinSize.SM]: {
  //   [CountdownLevel.MINOR]: sm,
  // },
  // [WinSize.MD]: {
  //   [CountdownLevel.MINOR]: md,
  // },
  // [WinSize.LG]: {
  //   [CountdownLevel.MINOR]: lg,
  // },
  // [WinSize.XL]: {
  //   [CountdownLevel.MINOR]: xl,
  // },
};

export default backgroundApplyParams(params);
