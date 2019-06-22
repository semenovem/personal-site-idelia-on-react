import React from "react";
import PageMgrCtx from "./PageMgrCtx";

export function withUserInteraction<T>(Component: any) {
  function PageMgrConsumer(props: T) {
    return (
      <PageMgrCtx.Consumer>
        {pageMgrValue => <Component {...props} hasUserInteraction={pageMgrValue.hasUserInteraction} />}
      </PageMgrCtx.Consumer>
    );
  }

  PageMgrConsumer.displayName = `withCtxPageMgr(${Component.displayName || Component.name || 'Undefined'})`;

  return PageMgrConsumer;
}
