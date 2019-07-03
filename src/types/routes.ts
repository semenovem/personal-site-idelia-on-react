import uniqueHtmlId from 'utils/uniqueHtmlId';

export interface RouteItem {
  readonly ID: string;
  readonly HTML_ID: string;
  readonly HASH: string;
  readonly MENU_ITEM_NAME: string;
  readonly TITLE: string;
  readonly SINGLE?: true;
}

export interface Route {
  readonly HEADER: RouteItem;
  readonly BIO: RouteItem;
  readonly BIO_FULLY: RouteItem;
  readonly CONTACT: RouteItem;
  readonly GALLERY: RouteItem;
  readonly MUSIC: RouteItem;
  readonly NEWS: RouteItem;
  readonly VIDEOS: RouteItem;

  readonly ORDER_NAV_MENU: RouteItem[];
  readonly ORDER_HAM_MENU: RouteItem[];
  readonly SINGLE_PAGE: RouteItem[];

  readonly ALL: RouteItem[];
}

export const ROUTES: Route = {
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

  BIO_FULLY: {
    ID: 'BIO',
    HTML_ID: uniqueHtmlId(),
    HASH: '#bio-full',
    TITLE: 'BIO',
    MENU_ITEM_NAME: 'Bio',
    SINGLE: true,
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
    TITLE: 'Contact Me',
    MENU_ITEM_NAME: 'Contact',
  },

  ORDER_NAV_MENU: [],
  ORDER_HAM_MENU: [],
  SINGLE_PAGE: [],
  ALL: [],
};

ROUTES.ORDER_HAM_MENU.push(
  ROUTES.MUSIC,
  ROUTES.BIO,
  ROUTES.VIDEOS,
  ROUTES.GALLERY,

  /* TODO to temporarily hide section NEWS, because it work ip progress
  ROUTES.NEWS,
  */
  ROUTES.CONTACT
);

ROUTES.ORDER_NAV_MENU.push(
  ROUTES.MUSIC,
  ROUTES.BIO,

  ROUTES.VIDEOS,
  ROUTES.NEWS,

  ROUTES.GALLERY,
  ROUTES.CONTACT
);

ROUTES.ALL.push(
  ROUTES.HEADER,
  ROUTES.BIO,
  ROUTES.NEWS,
  ROUTES.MUSIC,
  ROUTES.VIDEOS,
  ROUTES.GALLERY,
  ROUTES.CONTACT
);

ROUTES.SINGLE_PAGE.push(ROUTES.BIO_FULLY);
