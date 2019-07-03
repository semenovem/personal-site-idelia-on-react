import { WinSize } from 'ctx/WinSize';
import { CountdownLevel } from 'ctx/Countdown';
import { backgroundApplyParams } from 'cnt/ProgressiveImg';

import xs from './assets/bg/bg_xs.jpg';
import sm from './assets/bg/bg_sm.jpg';
import md from './assets/bg/bg_lg.jpg';
import xl from './assets/bg/bg_xl.jpg';

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
    [CountdownLevel.CORE]: md, // not file for it resolution
  },
  [WinSize.XL]: {
    [CountdownLevel.CORE]: xl,
  },
};

export default backgroundApplyParams(params);
