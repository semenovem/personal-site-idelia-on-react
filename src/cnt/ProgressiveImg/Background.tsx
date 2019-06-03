import React from 'react';
import {findRelevantImg} from "./utils";

import {CountdownLevel, ICountdownProps, withCtxCountdown} from 'ctx/Countdown';
import {IWinSizeProps, WinSize, withCtxWinSize} from 'ctx/WinSize';


import {IProgressiveImgParam} from "./types";

interface IOwnProps {
  className?: string;
  children: React.ReactElement;
}

type IProps = IOwnProps & ICountdownProps & IWinSizeProps;

const Background: React.FC<IProps> = ({ className, children, winSize, countdown }) => {

  console.log('start calc: ', countdown.level, winSize);

  const i = findRelevantImg(args, countdown.level, winSize);

  console.log('total:\n', countdown.level, winSize, i);

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default withCtxCountdown<IOwnProps>(withCtxWinSize<IOwnProps>(Background));



const args: IProgressiveImgParam = {
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
