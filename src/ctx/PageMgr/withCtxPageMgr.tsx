import React from 'react';
import PageMgrCtx from './PageMgrCtx';
import { Page } from './types';

export function withCtxPageMgr<T>(page: Page, Component: any) {
  function PageMgrConsumer(props: T) {
    return (
      <PageMgrCtx.Consumer>
        {pageMgr => {
          const pageMgrValue = { ...pageMgr, hasUserInteraction: page === pageMgr.topPage };
          return (
            <PageMgrCtx.Provider value={pageMgrValue}>
              <Component {...props} pageMgr={pageMgrValue} />
            </PageMgrCtx.Provider>
          );
        }}
      </PageMgrCtx.Consumer>
    );
  }

  PageMgrConsumer.displayName = `withCtxPageMgr(${Component.displayName ||
    Component.name ||
    'Undefined'})`;

  return PageMgrConsumer;
}
