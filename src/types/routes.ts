import uniqueHtmlId from 'utils/uniqueHtmlId';

export interface IRouteItem {
  readonly ID: string,
  readonly HTML_ID: string,
  readonly HASH: string,
  readonly MENU_ITEM_NAME: string,
  readonly TITLE: string;
}

export interface IRoute {
  readonly HEADER: IRouteItem;
  readonly BIO: IRouteItem;
  readonly CONTACT: IRouteItem;
  readonly GALLERY: IRouteItem;
  readonly MUSIC: IRouteItem;
  readonly NEWS: IRouteItem;
  readonly VIDEOS: IRouteItem;
  readonly ORDER_NAV_MENU: Array<IRouteItem>;
  readonly ORDER_HAM_MENU: Array<IRouteItem>;
  readonly SINGLE_PAGE: Array<IRouteItem>;
  readonly ALL: Array<IRouteItem>;
}

export const ROUTES: IRoute = {
  HEADER: {
    ID: 'HEADER',
    HTML_ID: uniqueHtmlId(),
    HASH: '#home',
    TITLE: '',
    MENU_ITEM_NAME: 'Home',
  },

  BIO: {
    ID: 'BIO',
    HTML_ID: uniqueHtmlId(),
    HASH: '#bio',
    TITLE: 'BIO',
    MENU_ITEM_NAME: 'Bio',
  },

  GALLERY: {
    ID: 'GALLERY',
    HTML_ID: uniqueHtmlId(),
    HASH: '#gallery',
    TITLE: 'Gallery',
    MENU_ITEM_NAME: 'Gallery',
  },

  MUSIC: {
    ID: 'MUSIC',
    HTML_ID: uniqueHtmlId(),
    HASH: '#music',
    TITLE: 'Music',
    MENU_ITEM_NAME: 'Music',
  },

  NEWS: {
    ID: 'NEWS',
    HTML_ID: uniqueHtmlId(),
    HASH: '#news',
    TITLE: 'News',
    MENU_ITEM_NAME: 'News',
  },

  VIDEOS: {
    ID: 'VIDEOS',
    HTML_ID: uniqueHtmlId(),
    HASH: '#videos',
    TITLE: 'Videos',
    MENU_ITEM_NAME: 'Videos',
  },

  CONTACT: {
    ID: 'CONTACT',
    HTML_ID: uniqueHtmlId(),
    HASH: '#contact',
    TITLE: 'Contact',
    MENU_ITEM_NAME: 'Contact',
  },

  ORDER_NAV_MENU: [],
  ORDER_HAM_MENU: [],
  SINGLE_PAGE: [],
  ALL: [],
};

ROUTES.ORDER_HAM_MENU.push(
  ROUTES.HEADER,
  ROUTES.BIO,
  ROUTES.NEWS,
  ROUTES.MUSIC,
  ROUTES.VIDEOS,
  ROUTES.GALLERY,
  ROUTES.CONTACT,
);

ROUTES.ORDER_NAV_MENU.push(
  ROUTES.BIO,
  ROUTES.NEWS,
  ROUTES.MUSIC,
  ROUTES.VIDEOS,
  ROUTES.GALLERY,
  ROUTES.CONTACT,
);

ROUTES.ALL.push(
  ROUTES.HEADER,
  ROUTES.BIO,
  ROUTES.NEWS,
  ROUTES.MUSIC,
  ROUTES.VIDEOS,
  ROUTES.GALLERY,
  ROUTES.CONTACT,
);

ROUTES.SINGLE_PAGE.push(
  ROUTES.HEADER,
  ROUTES.NEWS,
  ROUTES.MUSIC,
  ROUTES.VIDEOS,
  ROUTES.GALLERY,
);
