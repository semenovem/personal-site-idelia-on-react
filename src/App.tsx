import React from 'react';
import 'styles/global.css'
import 'styles/vars.css'
import 'styles/vars_next.css'

import SinglePage from 'pages/SinglePage';
import HamMenu from "./mod/HamMenu";
import {ROUTES} from "./types/routes";
import OffTabIndexCtx from 'ctx/OffTabIndex';


interface IState {
  /**
   * Отключение перемещения фокуса с клавиатуры для single page
   */
  offTabIndexSinglePage: boolean,

  /**
   * Открыто меню
   */
  isOpenHamMenu: boolean,
}

class App extends React.Component<{}, IState> {


  public state = {
    offTabIndexSinglePage: false,
    isOpenHamMenu: false,
  };


  public componentWillMount() {
    window.addEventListener('hashchange', this.handleHashChange);
    window.addEventListener('keydown', this.handleKey);
  }

  public componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);
    window.removeEventListener('keydown', this.handleKey);
  }

  private handleKey = (e: KeyboardEvent) => {
    const {isOpenHamMenu} = this.state;

    if (e.code === 'Escape' && isOpenHamMenu) {
      this.handleCloseHamMenu();
      return;
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

  private handleOpenHamMenu = () => this.setState({
    isOpenHamMenu: true,
    offTabIndexSinglePage: true,
  });

  private handleCloseHamMenu = () => this.setState({
    isOpenHamMenu: false,
    offTabIndexSinglePage: false,
  });

  private handleHashChange = () => {
    const hash = window.location.hash || ROUTES.HEADER.HASH;
    const routeItem = ROUTES.ALL.find(it => it.HASH === hash);

    if (!routeItem) {
      return;
    }

    const el = document.getElementById(routeItem.HTML_ID);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }

    if (this.state.isOpenHamMenu) {
      setTimeout(() => {
        this.setState({
          isOpenHamMenu: false,
        })
      }, 100);
    }
  };


  render() {
    const {offTabIndexSinglePage, isOpenHamMenu} = this.state;

    return (
      <>
        <OffTabIndexCtx.Provider value={offTabIndexSinglePage}>
          <SinglePage
            onOpenHamMenu={this.handleOpenHamMenu}
          />
        </OffTabIndexCtx.Provider>

          <HamMenu
            isShow={isOpenHamMenu}
            onClose={this.handleCloseHamMenu}
            onSelect={noop}
          />
      </>
    );
  }
}

export default App;

function noop() {}
