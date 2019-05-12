
export interface ISongItem {
  coverUrs: string;
  promoUrl: string;

  title: string;

  itunes: {
    url: string;
  };

  spotify: {
    url: string;
  }
}

export const songs: Array<ISongItem> = [
  {
    coverUrs: '',
    promoUrl: '',
    title: '',
    itunes: {
      url: '',
    },
    spotify: {
      url: '',
    }
  },


  {
    coverUrs: '',
    promoUrl: '',
    title: '',
    itunes: {
      url: '',
    },
    spotify: {
      url: '',
    }
  },

];
