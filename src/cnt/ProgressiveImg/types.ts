import {CountdownLevel} from "ctx/Countdown";
import {WinSize} from "ctx/WinSize";

const isArray = Array.isArray.bind(Array);

export interface IProgressiveImgProps {
  params: IProgressiveImgParams;
}





export type IProgressiveImgParams = IParams;


/**
 * @simple format
 */
export interface IParams {
  [win: string]: {
    [lev: string]: string;
  }
}


/**
 * @work in progress
 */
type IProgressiveImgParamsNext = any;

export interface ILevWin {
  lev: CountdownLevel;
  win: WinSize;
  img: string;
}
export function isILevWin(a: IProgressiveImgParamsNext): ILevWin | null {
  return !isArray(a.lev) && 'win' in a && !isArray(a.win) ? a as ILevWin : null;
}



export interface ILevWinKit {
  lev: CountdownLevel;
  win: IDefWin[];
}
export function isILevWinKit(a: IProgressiveImgParamsNext): ILevWinKit | null {
  return !isArray(a.lev) && 'win' in a && isArray(a.win) && !('img' in a) ? a as ILevWinKit : null;
}



interface ILevKitWin {
  lev: IDefLev[]
  win: WinSize,
}
export function isILevKitWin(a: IProgressiveImgParamsNext): ILevKitWin | null {
  return isArray(a.lev) && 'win' in a && !isArray(a.win) ? a as ILevKitWin : null;
}



interface ILevDefWinKit {
  lev: CountdownLevel;
  win: WinSize[];
  img: string;
}
export function isILevDefWinKit(a: IProgressiveImgParamsNext): ILevDefWinKit | null {
  return !isArray(a.lev) && 'win' in a && isArray(a.win) && 'img' in a ? a as ILevDefWinKit : null;
}


// if root, then apply to all sizes of window
// and as child
export interface IDefLev {
  lev: CountdownLevel;
  img: string;
}
export function isIDefLev(a: IProgressiveImgParamsNext): IDefLev | null {
  return !isArray(a.lev) && !('win' in a) && 'img' in a ? a as IDefLev : null;
}



// only as child
export interface IDefWin {
  win: WinSize,
  img: string;
}
