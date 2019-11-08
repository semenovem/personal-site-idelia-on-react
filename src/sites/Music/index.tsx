import React from 'react';
import './styles/global.css';
import './styles/vars.css';
import './styles/vars_next.css';

import SinglePage from 'sites/Music/SinglePage';
import BioMob from 'pages/BioMob';
import HamMenu from 'pages/HamMenu';
import MusicPlayer from 'mod/MusicPlayer';
import HamMenuPortal from 'portals/HamMenuPortal';
import MusicPlayerPortal from 'portals/MusicPlayerPortal';
import SplashPagePortal from 'portals/SplashPagePortal';

import { RouteItem } from 'types/routes';
import { musicPlayerControl } from 'ctx/MusicPlayer';
import { hasPreRendering } from 'sys/prerender';
import { Helmet } from 'react-helmet';

class App extends React.Component<{}> {
  private splashPages: RouteItem[] = [];

  public constructor(props: {}) {
    super(props);
    window.addEventListener('keydown', this.handleKey);
  }

  public componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  private handleKey = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      if (this.splashPages.length) {
        this.splashPages.pop();
        return;
      }

      musicPlayerControl.pause();
    }

    if (e.code === 'Space') {
      const el = document.activeElement as HTMLLinkElement | null;

      /**
       * Не прокручиваем страницу на space, если фокус на теге '<a>'
       */
      if (el && el.tagName === 'A' && el.tabIndex > -1) {
        e.preventDefault();
        el.click();
      }
    }
  };

  public render() {
    if (hasPreRendering()) {
      return null;
    }

    return (
      <>
        <Helmet>
          <title>Idelia music site</title>
          <meta
            name="description"
            content="The official website of Idelia Mars. Idelia is a Singer, Songwriter, Writer and Actress. She is an International Music talent in the genres of Pop, Electronic, Dance and R&B. Featuring Idelia Mars biography, contact information, photo galleries, music, videos, links"
          />
          <meta name="keywords" content="music, singer, pop, songs, Idelia Mars" />
        </Helmet>
        <SinglePage />

        <SplashPagePortal>
          <BioMob />
        </SplashPagePortal>

        <HamMenuPortal>
          <HamMenu />
        </HamMenuPortal>

        <MusicPlayerPortal>
          <MusicPlayer />
        </MusicPlayerPortal>
      </>
    );
  }
}

export default App;
