import {ILevWin, IProgressiveImgParams} from './types';

import {CountdownLevel, howRelevant as levHowRelevant} from "ctx/Countdown";
import {WinSize, howRelevant as winHowRelevant} from "ctx/WinSize";

type IArgs = IProgressiveImgParams | IProgressiveImgParams[];

interface IEmpty {
  lev: CountdownLevel | null;
  win: WinSize | null;
  img: string | null
}




const argsss: IProgressiveImgParams = {
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





interface ISt {
  cur: IEmpty | ILevWin;
  lev: CountdownLevel;
  win: WinSize;
}





export function findRelevantImg(args: IArgs, countdownLevel: CountdownLevel, winSize: WinSize): string | null {
  const st: ISt = {
    cur: {
      lev: null,
      win: null,
      img: null,
    },
    lev: countdownLevel,
    win: winSize,
  };

  // todo for development
  args = argsss;


  if (Array.isArray(args)) {
    args.forEach(it => {});

    return null;
  } else {
      return (defItem(st, args)).cur.img;
  }
}

function defItem(st: ISt, a: IProgressiveImgParams): ISt {
  if (Array.isArray(a.lev)) {

    return {} as ISt
  }

  if (Array.isArray(a.win)) {

    return {} as ISt
  }

  if ('win' in a) {

  }

  return defLevWin(st, a);
}



/**
 * for ILevWin
 */
function defLevWin(st: ISt, a: ILevWin): ISt {
  const levPrev = levHowRelevant(st.lev, st.cur.lev);
  const levNext = levHowRelevant(st.lev, a.lev);

  if (levNext === null || (levPrev !== null && levNext > levPrev)) {
    // not actual for level
    return st;
  }

  const winPrev = winHowRelevant(st.win, st.cur.win);
  const winNext = winHowRelevant(st.win, a.win);

  if (winNext === null) {
    // not actual for win size
    return st;
  }


  if (levPrev && winPrev) {
    if (levNext === levPrev && winNext > winPrev) {
      return st;
    }
  }

  st.cur = {
    ...a
  };
  return st;
}




const arg: IProgressiveImgParams = {
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
const argsss: IProgressiveImgParams[] = [
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

