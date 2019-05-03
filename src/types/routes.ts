import uniqueHtmlId from 'utils/uniqueHtmlId';

export const MOD = {
  CONTACTS: {
    htmlId: uniqueHtmlId(),
  },

  GALLERY: {
    htmlId: uniqueHtmlId(),
  },

  HEADER: {
    htmlId: uniqueHtmlId(),
  },

  MUSIC: {
    htmlId: uniqueHtmlId(),
  },

  NEWS: {
    htmlId: uniqueHtmlId(),
  },

  VIDEOS: {
    htmlId: uniqueHtmlId(),
  },
};


export enum EModHtmlId {
  CONTACTS = uniqueHtmlId(),
  GALLERY = fn(),
}



function fn(): string {
  return 53;
}
