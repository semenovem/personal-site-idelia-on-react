import React from 'react';

import Header from 'mod/Header';
import Music from 'mod/Music';
import Videos from 'mod/Videos';
import Gallery from 'mod/Gallery';
import Bio from 'mod/Bio';
import Contact from 'mod/Contact';
import News from 'mod/News';
import Footer from 'mod/Footer';
import { withCtxPageMgr, Page } from 'ctx/PageMgr';
import { ROUTES, RouteItem } from 'types/routes';

import css from './style.module.css';

const routes = [
  ROUTES.HEADER,
  ROUTES.MUSIC,
  ROUTES.BIO,
  ROUTES.VIDEOS,
  ROUTES.GALLERY,
  ROUTES.NEWS,
  ROUTES.CONTACT,
];

const obj: { [id: string]: RouteItem } = {};

const routesAsObjByHtmlId: { [id: string]: RouteItem } = routes.reduce((acc, it: RouteItem) => {
  acc[it.HTML_ID] = it;

  return acc;
}, obj);

class SinglePage extends React.Component<{}> {
  public constructor(props: {}) {
    super(props);
    window.addEventListener('hashchange', this.handleHashChange);
  }

  public componentDidMount() {
    const observer = new IntersectionObserver(this.handleObserver, {
      threshold: 0,
      rootMargin: '-200px 0px -100px 0px',
    });

    routes
      .map(it => document.getElementById(it.HTML_ID))
      .filter(Boolean)
      .forEach(it => observer.observe(it as HTMLElement));
  }

  public componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  private handleObserver: IntersectionObserverCallback = (event: IntersectionObserverEntry[]) => {
    event
      .filter(it => it.isIntersecting)
      .map(it => routesAsObjByHtmlId[it.target.id])
      .filter(Boolean)
      .forEach(it => {
        window.history.pushState(null, '', it.HASH);
      });
  };

  private handleHashChange = () => {
    const hash = window.location.hash || ROUTES.HEADER.HASH;
    const routeItem = routes.find(it => it.HASH === hash);

    if (!routeItem) {
      return;
    }

    const el = document.getElementById(routeItem.HTML_ID);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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
