import React from 'react';
import 'styles/vars.css';
import 'styles/global.css';

const Main = React.lazy(() => import('sites/Main'));
const Music = React.lazy(() => import('sites/Music'));
const MovieSeeMyVoice = React.lazy(() => import('sites/movies/SeeMyVoice'));

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
    // no unsubscribe, the application is constantly running
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
    let Cmp;

    switch (this.state.route) {
      case Route.MUSIC:
        Cmp = <Music />;
        break;
      case Route.MOVIES:
        Cmp = <MovieSeeMyVoice />;
        break;

      default:
        Cmp = <Main />;
    }

    return <React.Suspense fallback={null}>{Cmp}</React.Suspense>;
  }
}

export default App;
