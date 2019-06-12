import React from 'react';
import 'styles/global.css'
import 'styles/vars.css'
import 'styles/vars_next.css'

import SinglePage from 'pages/SinglePage';
import BioMob from 'pages/BioMob';
import HamMenu from 'mod/HamMenu';
import MusicPlayer from 'mod/MusicPlayer';
import Portal from 'portals/Portal';
import SplashPagePortal from 'portals/SplashPagePortal';

import {IRouteItem, ROUTES} from "types/routes";
import OffTabIndexCtx from 'ctx/OffTabIndex';
import {IMusicPlayerProps, withCtxMusicPlayer} from 'ctx/MusicPlayer';
import {IWinSizeProps, withCtxWinSize} from 'ctx/WinSize';

type IProps  = IMusicPlayerProps & IWinSizeProps;

interface IState {
  /**
   * menu is open
   */
  isOpenHamMenu: boolean;
}


class App extends React.Component<IProps, IState> {
  public state = {
    isOpenHamMenu: false,
  };

  private splashPages: IRouteItem[] = [];

  constructor(props: IProps) {
    super(props);
    window.addEventListener('hashchange', this.handleHashChange);
    window.addEventListener('keydown', this.handleKey);
  }

  public componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);
    window.removeEventListener('keydown', this.handleKey);
  }

  private handleKey = (e: KeyboardEvent) => {
    const {isOpenHamMenu} = this.state;

    if (e.code === 'Escape') {
      if (isOpenHamMenu) {
        this.handleCloseHamMenu();
        return;
      }

      if (this.splashPages.length) {
        this.splashPages.pop();
        return;
      }

      this.props.musicPlayer.pause();
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

  private handleOpenHamMenu = () => this.setState({isOpenHamMenu: true,});
  private handleCloseHamMenu = () => this.setState({isOpenHamMenu: false,});


  private handleHashChange = () => {
    const hash = window.location.hash || ROUTES.HEADER.HASH;
    const routeItem = ROUTES.ALL.find(it => it.HASH === hash);

    if (!routeItem) {
      return;
    }

    if (routeItem.SINGLE) {
      const ind = this.splashPages.indexOf(routeItem);

      if (ind > -1) {
        this.splashPages.length = ind+1;
      } else {
        this.splashPages.push(routeItem);
      }

      this.forceUpdate();
    } else {

      const el = document.getElementById(routeItem.HTML_ID);
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }

      if (this.splashPages.length) {
        this.splashPages.length = 0;
        this.forceUpdate();
      }
    }

    if (this.state.isOpenHamMenu) {
      setTimeout(this.handleCloseHamMenu, 100);
    }
  };


  /**
   * Render splash screen pages
   */
  private renderSplashPages() {

    if (this.splashPages.length) {
      return (
        <SplashPagePortal>
          <BioMob/>
        </SplashPagePortal>
      );
    }

    return null;
  }



  public render() {
    const {isOpenHamMenu} = this.state;
    const splashPages = this.renderSplashPages();
    const offTabIndexSinglePage = isOpenHamMenu || !!splashPages;

    return (
      <>
        <OffTabIndexCtx.Provider value={offTabIndexSinglePage}>
          <SinglePage
            onOpenHamMenu={this.handleOpenHamMenu}
          />
        </OffTabIndexCtx.Provider>

        {splashPages}

        <Portal>
          <HamMenu
            isShow={isOpenHamMenu}
            onClose={this.handleCloseHamMenu}
            onSelect={noop}
          />
        </Portal>

        <Portal>
          <MusicPlayer />
        </Portal>
      </>
    );
  }
}

export default withCtxWinSize(withCtxMusicPlayer(App));

function noop() {}
