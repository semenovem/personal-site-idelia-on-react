import coverDifferent from './assets/covers/different.jpg';
import coverDifferentBackstage from './assets/covers/different_backstage.jpg';
import coverLoveBizarre from './assets/covers/love_bizarre.jpg';
import coverTheRoadBeforeMe from './assets/covers/the_road_before_me.jpg';
import coverTvTatarGirl from './assets/covers/tv_tatar_girl.jpg';
import coverIdeliaByLeron from './assets/covers/idelia_by_leron.jpg';
import coverDifferentInterview from './assets/covers/different_interview.jpg';
import coverMyVoice from './assets/covers/my_voice.jpg';

let id = 0;

interface Video {
  id: number;
  title: string;
  tooltip: string;
  url: string;
  cover: string;
  promo?: boolean;

  youtube?: string;
  iframe?: string;
}

export const videos: Video[] = [
  {
    id: ++id,
    title: 'My Voice',
    tooltip: '',
    url: 'https://www.youtube.com/embed/YQtG0hpHb2Y',
    cover: coverMyVoice,
    promo: true,

    iframe: 'https://www.youtube.com/embed/YQtG0hpHb2Y?controls=0&modestbranding=1&enablejsapi=1',
  },
  {
    id: ++id,
    title: 'Different',
    tooltip: '',
    url: 'https://www.youtube.com/embed/_qQYNjPbboM',
    cover: coverDifferent,
    iframe: 'https://www.youtube.com/embed/_qQYNjPbboM?controls=0&modestbranding=1&enablejsapi=1',
  },

  {
    id: ++id,
    title: 'Different music video backstage',
    tooltip: '',
    url: 'https://www.youtube.com/embed/cXLd-sVMZdU',
    cover: coverDifferentBackstage,
    iframe:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/cXLd-sVMZdU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },

  {
    id: ++id,
    title: 'Different interview',
    tooltip: '',
    url: 'https://www.youtube.com/embed/Niyp8ykGZFE',
    cover: coverDifferentInterview,
    iframe:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/Niyp8ykGZFE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },

  {
    id: ++id,
    title: 'Love bizarre',
    tooltip: '',
    url: 'https://www.youtube.com/embed/heSCtd9LZss',
    cover: coverLoveBizarre,
    youtube: 'https://www.youtube.com/watch?v=heSCtd9LZss&feature=youtu.be',
    iframe:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/heSCtd9LZss" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },

  {
    id: ++id,
    title: 'The road before me',
    tooltip: '',
    url: 'https://www.youtube.com/embed/tAz7-pgGo8c',
    cover: coverTheRoadBeforeMe,
    youtube: 'https://www.youtube.com/watch?v=tAz7-pgGo8c&feature=youtu.be',
    iframe:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/tAz7-pgGo8c?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },

  {
    id: ++id,
    title: 'tv Tatar girl',
    tooltip: '',
    url: 'https://www.youtube.com/embed/O_MipF8mz_w',
    cover: coverTvTatarGirl,
    youtube: 'https://www.youtube.com/watch?v=O_MipF8mz_w&feature=youtu.be',
    iframe:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/O_MipF8mz_w?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },

  {
    id: ++id,
    title: 'Idelia by Leron',
    tooltip: '',
    url: 'https://www.youtube.com/embed/dhtkYDaODYc',
    cover: coverIdeliaByLeron,
    youtube: 'https://www.youtube.com/watch?v=dhtkYDaODYc&feature=youtu.be',
    iframe:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/dhtkYDaODYc?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
];
