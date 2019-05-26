import React from 'react';
import WinSize from 'types/WinSize';

export interface IWinSizeProps {
  winSize: WinSize;
}

const WinSizeCtx = React.createContext<WinSize>(WinSize.XS);

export function withWinSizeCtx<T>(Component: any) {
  function WinSizeCtxCmp(props: T) {
    return (
      <WinSizeCtx.Consumer>
        {winSize => <Component {...props} winSize={winSize} />}
      </WinSizeCtx.Consumer>
    );
  }

  WinSizeCtxCmp.displayName = `withOffTabIndexCtx(${Component.displayName || Component.name || 'Undefined'})`;

  return WinSizeCtxCmp;
}

export default WinSizeCtx;
