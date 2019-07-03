import React from 'react';
import WinSizeCtx from './WinSizeCtx';

function withCtxWinSize<T>(Component: any) {
  function WinSizeCtxCmp(props: T) {
    return (
      <WinSizeCtx.Consumer>
        {winSize => <Component {...props} winSize={winSize} />}
      </WinSizeCtx.Consumer>
    );
  }

  WinSizeCtxCmp.displayName = `withWinSizeCtx(${Component.displayName ||
    Component.name ||
    'Undefined'})`;

  return WinSizeCtxCmp;
}

export default withCtxWinSize;
