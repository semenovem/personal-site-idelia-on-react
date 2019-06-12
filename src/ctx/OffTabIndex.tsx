import React from 'react';

export interface IOffTabIndex {
  offTabIndex: boolean;
}

const OffTabIndexCtx = React.createContext<boolean>(false);


export function withOffTabIndexCtx<T>(Component: React.ComponentType<T>) {
  function OffTabIndexCtxCmp(props: any)  {
    return (
      <OffTabIndexCtx.Consumer>
        {offTabIndex => <Component {...props} offTabIndex={offTabIndex} />}
      </OffTabIndexCtx.Consumer>
    );
  }

  OffTabIndexCtxCmp.displayName = `withOffTabIndexCtx(${Component.displayName || Component.name || 'Undefined'})`;

  return OffTabIndexCtxCmp;
}

export default OffTabIndexCtx;





// @example

// interface IChildProps {
//   offTabIndex: boolean;
//   anythings: string;
// }

// const Child: React.FC<IChildProps> = ({ offTabIndex }) => {
//   return (<div>child: {offTabIndex && 'offTabIndex'} </div>);
// };

// const ChildWithCtx = withOffTabIndexCtx<IChildProps>(Child);


// @usage


// function Test() {
//   return (
//     // требует передачу свойства `offTabIndex`, а оно добавляется в обертке
//     <ChildWithCtx anythings="" offTabIndex />
//   );
// }

/*

// type OmitPayload<A extends IAction> = Omit<A, 'payload'>;
  type Ii = Exclude<T, IOffTabIndex>

  interface I extends Pick<T, Exclude<keyof T, K>> {}

  interface Iii {

  }
 */
