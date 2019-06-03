import {IDefLevWin, IProgressiveImgParam} from './types';

import {CountdownLevel} from "ctx/Countdown";
import {WinSize} from "ctx/WinSize";

type IParam = IProgressiveImgParam | IProgressiveImgParam[];

interface IEmpty {
  lev: CountdownLevel | null;
  win: WinSize | null;
  img: string | null
}


export function findRelevantImg(args: IParam, countdownLevel: CountdownLevel, winSize: WinSize): string | null {
  const obj: IEmpty | IDefLevWin = {
    lev: null,
    win: null,
    img: null,
  };

  obj.lev = CountdownLevel.CRITICAL;

  if (Array.isArray(args)) {
    args.forEach(it => {});

    return null;
  } else {
      return (pre(args, countdownLevel, winSize)).img;
  }
}

function pre(a: IProgressiveImgParam, lev: CountdownLevel, win: WinSize): IEmpty | IDefLevWin {
  if (Array.isArray(lev)) {

  }

  if (Array.isArray(win)) {

  }

  return { lev: null, win: null, img: null };
}



/**
 * for IDefLevWin
 */
function defLevWin(levWin: IDefLevWin | IEmpty, lev: CountdownLevel, win: WinSize) {

}






const arg: IProgressiveImgParam = {
  lev: CountdownLevel.CRITICAL,
  win: [
    {
      win: WinSize.MD,
      img: 'bg_xs.jpg',
    },
    {
      win: WinSize.LG,
      img: 'bg_lg.jpg',
    },
  ]
};


/**
 * @example
 */
const argsss: IProgressiveImgParam[] = [
  {
    // if not passed - apply to all
    lev: CountdownLevel.CORE,
    img: 'bg_xs.jpg',
  },
  {
    win: WinSize.SM,
    lev: [
      {
        lev: CountdownLevel.CRITICAL,
        img: 'bg_sm-mid.jpg',
      },
      {
        lev: CountdownLevel.IMPORTANT,
        img: 'bg-sm.jpg'
      }
    ],
  },

  {
    lev: CountdownLevel.CRITICAL,
    win: [
      {
        win: WinSize.MD,
        img: 'bg_md.jpg',
      },
      {
        win: WinSize.LG,
        img: 'bg_lg.jpg',
      },
    ],
  },
  {
    lev: CountdownLevel.CORE,
    win: [WinSize.LG], // if not passed - apply to all
    img: 'bg_lg.jpg',
  },
];

