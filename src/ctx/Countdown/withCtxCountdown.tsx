import React from 'react';
import CountdownCtx from './CountdownCtx';

function withCtxCountdown<T>(Component: any) {
  function CountdownCtxCmp(props: T) {
    return (
      <CountdownCtx.Consumer>
        {countdown => <Component {...props} countdown={countdown} />}
      </CountdownCtx.Consumer>
    );
  }

  CountdownCtxCmp.displayName = `withCtxCountdown(${Component.displayName ||
    Component.name ||
    'Undefined'})`;

  return CountdownCtxCmp;
}

export default withCtxCountdown;
