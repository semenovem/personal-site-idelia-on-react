import {makeImgBg} from 'utils/makeDataAttr';

import md from './assets/bg_md.jpg';
import lg from './assets/bg_lg.jpg';
import xl from './assets/bg_xl.jpg';
import xxl from './assets/bg_xxl.jpg';

const dataImgBg = makeImgBg({
  md,
  lg,
  xl,
  xxl,
});

export default dataImgBg;
