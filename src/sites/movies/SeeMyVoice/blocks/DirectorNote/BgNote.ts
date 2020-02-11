import { WinSize } from 'ctx/WinSize';
import { CountdownLevel } from 'ctx/Countdown';
import { backgroundApplyParams } from 'cnt/ProgressiveImg';

import xs from './assets/bg/bg2--xs.jpg';
import sm from './assets/bg/bg2--sm.jpg';
import md from './assets/bg/bg0--md.jpg';

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
};

export default backgroundApplyParams(params);
