import React from 'react';

import Header from 'mod/movies/seeMyVoice/Header';

import css from './style.module.css';

class Movies extends React.Component<{}> {
  public render() {
    return (
      <div className={css.movies}>
        <Header />
        movies
      </div>
    );
  }
}

export default Movies;
