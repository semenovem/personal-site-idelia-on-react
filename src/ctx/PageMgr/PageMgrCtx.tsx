import React from 'react';
import { PageMgrValue, Page } from './types';

export const pageMgrValue: PageMgrValue = {
  hasUserInteraction: false,
  topPage: Page.UNKNOWN,
};

const PageMgrCtx = React.createContext<PageMgrValue>(pageMgrValue);

export default PageMgrCtx;
