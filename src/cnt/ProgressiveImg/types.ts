import {CountdownLevel} from "ctx/Countdown";
import {WinSize} from "ctx/WinSize";

export interface ILevWin {
  lev: CountdownLevel;
  win: WinSize;
  img: string;
}

interface ILevWinKit {
  lev: CountdownLevel;
  win: IDefWin[];
}

interface ILevKitWin {
  lev: IDefLev[]
  win: WinSize,
}

interface ILevDefWinKit {
  lev: CountdownLevel;
  win: WinSize[];
  img: string;
}

// if root, then apply to all sizes of window
// and as child
interface IDefLev {
  lev: CountdownLevel;
  img: string;
}

// only as child
interface IDefWin {
  win: WinSize,
  img: string;
}


export type IProgressiveImgParams =
  ILevWin
  | ILevWinKit
  | ILevKitWin
  | ILevDefWinKit
  | IDefLev;

