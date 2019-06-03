
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
  XS = 0,
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
  XXL = 1400,
}
