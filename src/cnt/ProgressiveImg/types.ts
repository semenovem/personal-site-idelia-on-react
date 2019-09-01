import { CountdownLevel } from 'ctx/Countdown';
import { WinSize } from 'ctx/WinSize';

const isArray = Array.isArray.bind(Array);

export interface ProgressiveImgProps {
  params: IProgressiveImgParams;
}

export type IProgressiveImgParams = Params;

/**
 * @simple format
 */
export interface Params {
  [win: string]: {
    [lev: string]: string;
  };
}

/**
 * @work in progress
 */
type IProgressiveImgParamsNext = any;

export interface LevWin {
  lev: CountdownLevel;
  win: WinSize;
  img: string;
}
export function isILevWin(a: IProgressiveImgParamsNext): LevWin | null {
  return !isArray(a.lev) && 'win' in a && !isArray(a.win) ? (a as LevWin) : null;
}

export interface LevWinKit {
  lev: CountdownLevel;
  win: DefWin[];
}
export function isILevWinKit(a: IProgressiveImgParamsNext): LevWinKit | null {
  return !isArray(a.lev) && 'win' in a && isArray(a.win) && !('img' in a) ? (a as LevWinKit) : null;
}

interface LevKitWin {
  lev: DefLev[];
  win: WinSize;
}
export function isILevKitWin(a: IProgressiveImgParamsNext): LevKitWin | null {
  return isArray(a.lev) && 'win' in a && !isArray(a.win) ? (a as LevKitWin) : null;
}

interface LevDefWinKit {
  lev: CountdownLevel;
  win: WinSize[];
  img: string;
}
export function isILevDefWinKit(a: IProgressiveImgParamsNext): LevDefWinKit | null {
  return !isArray(a.lev) && 'win' in a && isArray(a.win) && 'img' in a ? (a as LevDefWinKit) : null;
}

// if root, then apply to all sizes of window
// and as child
export interface DefLev {
  lev: CountdownLevel;
  img: string;
}
export function isIDefLev(a: IProgressiveImgParamsNext): DefLev | null {
  return !isArray(a.lev) && !('win' in a) && 'img' in a ? (a as DefLev) : null;
}

// only as child
export interface DefWin {
  win: WinSize;
  img: string;
}
