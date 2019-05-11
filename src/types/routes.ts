import uniqueHtmlId from 'utils/uniqueHtmlId';

export interface IModItem {
  readonly ID: string,
  readonly HTML_ID: string,
  readonly ROUTE: string,
  readonly MENU_ITEM_NAME: string,
  readonly TITLE: string;
  readonly FIRST?: true,
}

export interface IMod {
  readonly HEADER: IModItem;
  readonly BIO: IModItem;
  readonly CONTACT: IModItem;
  readonly GALLERY: IModItem;
  readonly MUSIC: IModItem;
  readonly NEWS: IModItem;
  readonly VIDEOS: IModItem;
  readonly ORDER: Array<IModItem>;
}

export const MOD: IMod = {
  HEADER: {
    ID: 'HEADER',
    HTML_ID: uniqueHtmlId(),
    ROUTE: '#header',
    TITLE: '',
    MENU_ITEM_NAME: 'Home',
    FIRST: true,
  },

  BIO: {
    ID: 'BIO',
    HTML_ID: uniqueHtmlId(),
    ROUTE: '#bio',
    TITLE: 'BIO',
    MENU_ITEM_NAME: 'Bio',
  },

  GALLERY: {
    ID: 'GALLERY',
    HTML_ID: uniqueHtmlId(),
    ROUTE: '#gallery',
    TITLE: 'Gallery',
    MENU_ITEM_NAME: 'Gallery',
  },

  MUSIC: {
    ID: 'MUSIC',
    HTML_ID: uniqueHtmlId(),
    ROUTE: '#music',
    TITLE: 'Music',
    MENU_ITEM_NAME: 'Music',
  },

  NEWS: {
    ID: 'NEWS',
    HTML_ID: uniqueHtmlId(),
    ROUTE: '#news',
    TITLE: 'News',
    MENU_ITEM_NAME: 'News',
  },

  VIDEOS: {
    ID: 'VIDEOS',
    HTML_ID: uniqueHtmlId(),
    ROUTE: '#videos',
    TITLE: 'Videos',
    MENU_ITEM_NAME: 'Videos',
  },

  CONTACT: {
    ID: 'CONTACT',
    HTML_ID: uniqueHtmlId(),
    ROUTE: '#contact',
    TITLE: 'Contact',
    MENU_ITEM_NAME: 'Contact',
  },

  ORDER: [],
};

MOD.ORDER.push(
  MOD.HEADER,
  MOD.BIO,
  MOD.NEWS,
  MOD.MUSIC,
  MOD.VIDEOS,
  MOD.GALLERY,
  MOD.CONTACT,
);
