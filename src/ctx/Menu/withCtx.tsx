import React from 'react';
import Ctx from './Ctx';

function withCtx<T>(Component: any) {
  const MenuCtxCmp = (props: T) => {
    return <Ctx.Consumer>{menu => <Component {...props} menu={menu} />}</Ctx.Consumer>;
  };

  MenuCtxCmp.displayName = `withCtxMenu(${Component.displayName || Component.name || 'Undefined'})`;

  return MenuCtxCmp;
}

export default withCtx;
