export interface PageMgrProps {
  pageMgr: PageMgrValue;
}

export interface PageMgrUserInteractionProps {
  hasUserInteraction: boolean;
}

export interface PageMgrValue {
  hasUserInteraction: boolean;
  topPage: Page;
}

export enum Page {
  UNKNOWN,
  SINGLE,
  HAM_MENU,
  BIO_MOB,
  PHOTOS_VIEWER,
}

export type Handler = (isTop: boolean) => void;
