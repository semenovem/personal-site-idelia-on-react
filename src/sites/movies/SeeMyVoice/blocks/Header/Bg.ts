import { WinSize } from 'ctx/WinSize';
import { CountdownLevel } from 'ctx/Countdown';
import { backgroundApplyParams } from 'cnt/ProgressiveImg';

import xs from './assets/bg_mob_3--xs.jpg';
import sm from './assets/bg_mob_3--sm.jpg';
import md from './assets/bg--md.jpg';
import lg from './assets/bg--lg.jpg';
import xl from './assets/bg--xl.jpg';

export const params = {
  [WinSize.XS]: {
    [CountdownLevel.CORE]: xs,
  },
  [WinSize.SM]: {
    [CountdownLevel.CORE]: sm,
  },
  [WinSize.MD]: {
    [CountdownLevel.CORE]: md,
  },
  [WinSize.LG]: {
    [CountdownLevel.CORE]: lg,
  },
  [WinSize.XL]: {
    [CountdownLevel.CORE]: xl,
  },
};

export default backgroundApplyParams(params);
