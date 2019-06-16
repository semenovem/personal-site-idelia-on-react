
export interface IWinSizeProps {
  winSize: WinSize;
}

/**
 * Size of screens
 * minimal value for switching
 *
 * @example 0 >= XS < 567
 * @example 567 >= SM < 768
 */
export enum WinSize {
  XS = 0,     // 576 -- 288
  SM = 576,   // 768 -- 384
  MD = 768,   // 992 -- 496
  LG = 992,   // 1200 -- 600
  XL = 1200,  // 1400 -- 700
  XXL = 1400,
}