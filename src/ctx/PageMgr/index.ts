import { Page, PageMgrProps, PageMgrUserInteractionProps } from './types';

export { Page };

export interface PageMgrProps extends PageMgrProps {}
export type PageMgrUserInteractionProps = PageMgrUserInteractionProps;

export { default as PageMgr } from './PageMgr';
export { withCtxPageMgr } from './withCtxPageMgr';
export { withUserInteraction } from './withUserInteraction';
