export interface WinSizeProps {
  winSize: WinSize;
}

// TODO new for windows - move here
export interface WinSizeNext {
  scr: WinSize;
  scroll: {
    x: number;
    y: number;
  };
}

/**
 * Size of screens
 * minimal value for switching
 *
 * @example 0 >= XS < 567
 * @example 567 >= SM < 768
 */
export enum WinSize {
  XS = 0, // 600 -- 300
  SM = 600, // 960 -- 480
  MD = 960, // 1280 -- 690
  LG = 1280, // 1920 -- 960
  XL = 1920, // 1920 -- 1920
}
