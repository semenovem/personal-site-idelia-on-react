import React from 'react';

import Header from 'mod/Header';
import Music from 'mod/Music';
import Videos from 'mod/Videos';
import Gallery from 'mod/Gallery';
import Bio from 'mod/Bio';
import Contact from 'mod/Contact';
import News from 'mod/News';
import Footer from 'mod/Footer';
import {withCtxPageMgr, Page} from "ctx/PageMgr";
import {ROUTES} from "types/routes";

import css from './style.module.css';

const routes = [ROUTES.HEADER, ROUTES.MUSIC, ROUTES.BIO, ROUTES.VIDEOS, ROUTES.GALLERY, ROUTES.NEWS, ROUTES.CONTACT];

class SinglePage extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
    window.addEventListener('hashchange', this.handleHashChange);
  }

  public componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  private handleHashChange = () => {
    const hash = window.location.hash || ROUTES.HEADER.HASH;
    const routeItem = routes.find(it => it.HASH === hash);

    if (!routeItem) {
      return;
    }

    const el = document.getElementById(routeItem.HTML_ID);

    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  public render() {
    return (
      <>
        <Header />
        <main>
          <Music />
          <div className={css.optimize}>
            <Bio />
            <Videos />
            <Gallery />
            <News />
            <Contact />
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default withCtxPageMgr<{}>(Page.SINGLE, SinglePage);
