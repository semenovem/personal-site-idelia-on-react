import React from 'react';

export interface IOffTabIndex {
  offTabIndex: boolean;
}

const OffTabIndexCtx = React.createContext<boolean>(false);

export function withOffTabIndexCtx<T>(Component: any) {

  // T - без свойства offTabIndex
  return function OffTabIndexCtxCmp(props: T) {
    return (
      <OffTabIndexCtx.Consumer>
        {offTabIndex => <Component {...props} offTabIndex={offTabIndex} />}
      </OffTabIndexCtx.Consumer>
    );
  };
}

export default OffTabIndexCtx;
