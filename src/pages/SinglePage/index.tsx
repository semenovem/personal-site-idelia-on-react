import React from 'react';

import Header from 'mod/Header';
import Music from 'mod/Music';
import Videos from 'mod/Videos';
import Gallery from 'mod/Gallery';
import Bio from 'mod/Bio';
import Contact from 'mod/Contact';

import Footer from 'mod/Footer';

import HamMenu from 'mod/HamMenu';
import {ROUTES} from 'types/routes';

interface IProps {
}

interface IState {
  isOpenHamMenu: boolean;
  openedSingleRoute: OPENED_SINGLE_ROUTE | null;
}

enum OPENED_SINGLE_ROUTE {
  HAM_MENU,
  CONTACT,
  BIO,
}

class SinglePage extends React.Component<IProps, IState> {
  state = {
    openedSingleRoute: this.defOpenedSingleRoute(),
    isOpenHamMenu: false,
  };

  public componentWillMount() {
    window.addEventListener('hashchange', this.handleHashChange);
  }

  public componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  private defOpenedSingleRoute(): OPENED_SINGLE_ROUTE | null {
    switch (window.location.hash) {
      case ROUTES.BIO.HASH:
        return OPENED_SINGLE_ROUTE.BIO;
      case ROUTES.CONTACT.HASH:
        return OPENED_SINGLE_ROUTE.CONTACT;
      default:
        return null;
    }
  }

  private handleHashChange = () => {
    const openedSingleRoute = this.defOpenedSingleRoute();

    if (openedSingleRoute !== this.state.openedSingleRoute) {
      this.setState({
        openedSingleRoute,
      });
    }

    if (!openedSingleRoute) {
      const hash = window.location.hash;
      const routeItem = ROUTES.ALL.find(it => it.HASH === hash);

      if (!routeItem) {
        return;
      }

      const el = document.getElementById(routeItem.HTML_ID);
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    }

    if (this.state.isOpenHamMenu) {
      setTimeout(() => {
        this.setState({
          isOpenHamMenu: false,
        })
      }, 100);
    }
  };

  // TODO предотвратить повторную установку одних и тех же значений
  private handleOpenHamMenu = () => this.setState({isOpenHamMenu: true,});
  private handleCloseHamMenu = () => this.setState({isOpenHamMenu: false});

  private handleCloseSingleRoute = () => {
    window.history.back();
  };

  public render() {
    const {isOpenHamMenu, openedSingleRoute} = this.state;
    const offUserInteraction = Boolean(isOpenHamMenu || openedSingleRoute);

    return (
      <>
        <Header
          onActOpenHamMenu={this.handleOpenHamMenu}
          offUserInteraction={offUserInteraction}
        />
        <main>
          <Music offUserInteraction={offUserInteraction}/>
          <Videos offUserInteraction={offUserInteraction}/>
          <Gallery offUserInteraction={offUserInteraction}/>
        </main>

        <Footer offUserInteraction={offUserInteraction}/>

        {
          openedSingleRoute === OPENED_SINGLE_ROUTE.BIO
          && <Bio
            onActOpenHamMenu={this.handleOpenHamMenu}
            onClose={this.handleCloseSingleRoute}
          />
        }
        {openedSingleRoute === OPENED_SINGLE_ROUTE.CONTACT && <Contact />}

        <HamMenu
          isOpen={isOpenHamMenu}
          onClose={this.handleCloseHamMenu}
          onSelect={noop}
        />
      </>
    );
  }
}

function noop() {
}

export default SinglePage;
