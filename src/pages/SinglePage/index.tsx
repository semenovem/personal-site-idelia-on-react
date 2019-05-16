import React from 'react';

import Header from 'mod/Header';
import Music from 'mod/Music';
import Videos from 'mod/Videos';
import Gallery from 'mod/Gallery';
import Bio from 'mod/Bio';
import Contact from 'mod/Contact';
import News from 'mod/News';

import Footer from 'mod/Footer';

import HamMenu from 'mod/HamMenu';
import {ROUTES} from 'types/routes';

interface IProps {
}

interface IState {
  isOpenHamMenu: boolean;
}

class SinglePage extends React.Component<IProps, IState> {
  state = {
    isOpenHamMenu: false,
  };

  public componentWillMount() {
    window.addEventListener('hashchange', this.handleHashChange);
  }

  public componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);
  }


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

  // TODO предотвратить повторную установку одних и тех же значений
  private handleOpenHamMenu = () => this.setState({isOpenHamMenu: true,});
  private handleCloseHamMenu = () => this.setState({isOpenHamMenu: false});

  public render() {
    const {isOpenHamMenu} = this.state;

    return (
      <>
        <Header
          onActOpenHamMenu={this.handleOpenHamMenu}
          offUserInteraction={isOpenHamMenu}
        />
        <main>
          <Music offUserInteraction={isOpenHamMenu}/>
          <Bio offUserInteraction={isOpenHamMenu}/>
          <Videos offUserInteraction={isOpenHamMenu}/>
          <Gallery offUserInteraction={isOpenHamMenu}/>
          <News offUserInteraction={isOpenHamMenu}/>

          <Contact />
        </main>

        <Footer offUserInteraction={isOpenHamMenu}/>

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
