import React from 'react';
import 'styles/global.css';
import 'styles/vars.css';
import 'styles/vars_next.css';

import Main from 'pages/Main';
import Music from 'pages/Music';
import Movies from 'pages/movies/List';

enum Route {
  MAIN = '',
  MUSIC = 'music',
  MOVIES = 'movies',
}

interface State {
  route: Route;
}

const regRouteMusic = new RegExp(`^/${Route.MUSIC}(/.*)?$`, 'i');
const regRouteMovies = new RegExp(`^/${Route.MOVIES}(/.*)?$`, 'i');

class App extends React.Component<{}, State> {
  private static defineRoute(): Route {
    const { pathname } = window.location;

    switch (true) {
      case regRouteMusic.test(pathname):
        return Route.MUSIC;
      case regRouteMovies.test(pathname):
        return Route.MOVIES;
      default:
        return Route.MAIN;
    }
  }

  public constructor(props: {}) {
    super(props);
    window.addEventListener('popstate', this.handlePopState);

    const { pushState } = window.history;
    window.history.pushState = (...args) => {
      pushState.apply(window.history, args);
      window.dispatchEvent(new Event('popstate'));
    };

    this.state = {
      route: App.defineRoute(),
    };
  }

  public componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  private handlePopState = () => {
    const nextRoute = App.defineRoute();

    if (this.state.route === nextRoute) {
      return;
    }

    this.setState({
      route: nextRoute,
    });
  };

  public render() {
    switch (this.state.route) {
      case Route.MUSIC:
        return <Music />;
      case Route.MOVIES:
        return <Movies />;
      default:
        return <Main />;
    }
  }
}

export default App;
