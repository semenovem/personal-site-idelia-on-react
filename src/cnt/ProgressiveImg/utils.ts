import { CountdownLevel, howRelevant as levHowRelevant } from 'ctx/Countdown';
import { WinSize, howRelevant as winHowRelevant } from 'ctx/WinSize';
import * as T from './types';

const isArray = Array.isArray.bind(Array);

interface Empty {
  lev: CountdownLevel | null;
  win: WinSize | null;
  img: string | null;
}

interface St {
  cur: Empty | T.LevWin;
  lev: CountdownLevel;
  win: WinSize;
}

export function findRelevantImg(
  args: any /* wip */,
  countdownLevel: CountdownLevel,
  winSize: WinSize
): string | null {
  const st: St = {
    cur: {
      lev: null,
      win: null,
      img: null,
    },
    lev: countdownLevel,
    win: winSize,
  };

  return iterator(st, args).cur.img;
}

// для рекурсивного прохода данных
function iterator(st: St, a: any): St {
  return isArray(a) ? a.reduce((acc, it) => iterator(acc, it), st) : /*defType(st, a)*/ st;
}
//
// // определение типа данных
// function defType(st: St, a: T.IProgressiveImgParams): St {
//   let type;
//
//   type = T.isILevWin(a);
//   if (type) {
//     return defLevWin(st, type);
//   }
//
//
//
//   type = T.isILevWinKit(a);
//   if (type) {
//     return st;
//   }
//
//   if (T.isILevKitWin(a)) {
//     return st;
//   }
//
//   if (T.isILevDefWinKit(a)) {
//     return st;
//   }
//
//
//   if (T.isIDefLev(a)) {
//     return st;
//   }
//
//   return st;
// }
//
//
//
//
//
//
// // // разбор по типам данных
// // function defItem(st: St, a: T.IProgressiveImgParams): St {
// //   if (Array.isArray(a.lev)) {
// //     if (!('win' in a) || Array.isArray(a.win)) {
// //       return st;    // этого не может быть. ts не определяет, что если lev массив, то win точно есть
// //     }
// //     return defLevAsArray(st, a.lev, a.win);
// //   } else {
// //
// //   }
// //
// //   if ('win' in a) {
// //     if (Array.isArray(a.win)) {
// //
// //     } else {
// //
// //     }
// //   } else {
// //
// //   }
// //
// //   return defLevWin(st, a);
// // }
//
// // массив lev типа DefLev
// function defLevAsArray(st: St, lev: DefLev[], win: WinSize): St {
//   return lev.reduce((acc, it) => defLevWin(acc, { ...it, win }), st);
// }
//
// //
// function defWithLev(st: St, a: T.DefLev, lev: CountdownLevel): St {
//
//   return st;
// }
//
// //
// function defWithWin(st: St, a: T.DefLev, win: WinSize): St {
//
//   return st;
// }
//
//
//
//
//
/**
 * for LevWin
 */
export function defLevWin(st: St, a: T.LevWin): St {
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

  // eslint-disable-next-line no-param-reassign
  st.cur = {
    ...a,
  };
  return st;
}
//
//
//
//
//
// const argsss: T.IProgressiveImgParams = {
//   lev: CountdownLevel.IMPORTANT,
//   win: WinSize.XS,
//   img: 'bg_xs.jpg',
// };
//
//
//
//
// const argsss11: T.IProgressiveImgParams = {
//   lev: CountdownLevel.CRITICAL,
//   win: [
//     {
//       win: WinSize.MD,
//       img: 'bg_xs.jpg',
//     },
//     {
//       win: WinSize.LG,
//       img: 'bg_lg.jpg',
//     },
//   ]
// };
//
//
//
//
//
// const arg: T.IProgressiveImgParams = {
//   lev: CountdownLevel.CRITICAL,
//   win: [
//     {
//       win: WinSize.MD,
//       img: 'bg_xs.jpg',
//     },
//     {
//       win: WinSize.LG,
//       img: 'bg_lg.jpg',
//     },
//   ]
// };
//
//
// /**
//  * @example
//  */
// const args343ss: T.IProgressiveImgParams[] = [
//   {
//     // if not passed - apply to all
//     lev: CountdownLevel.CORE,
//     img: 'bg_xs.jpg',
//   },
//   {
//     win: WinSize.SM,
//     lev: [
//       {
//         lev: CountdownLevel.CRITICAL,
//         img: 'bg_sm-mid.jpg',
//       },
//       {
//         lev: CountdownLevel.IMPORTANT,
//         img: 'bg-sm.jpg'
//       }
//     ],
//   },
//   {
//     lev: CountdownLevel.CRITICAL,
//     win: [
//       {
//         win: WinSize.MD,
//         img: 'bg_md.jpg',
//       },
//       {
//         win: WinSize.LG,
//         img: 'bg_lg.jpg',
//       },
//     ],
//   },
//   {
//     lev: CountdownLevel.CORE,
//     win: [WinSize.LG], // if not passed - apply to all
//     img: 'bg_lg.jpg',
//   },
// ];
//
//
//
//
// const tasks = {
//   lev: {
//     win: 345,
//
//     [CountdownLevel.CORE]: 'asdasd',
//
//
//   },
//
// };
//
// delete (tasks['lev']);
