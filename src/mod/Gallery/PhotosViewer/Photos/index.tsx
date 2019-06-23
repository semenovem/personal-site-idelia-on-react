import React from 'react';

import css from './style.module.css';

interface Props {}


class Photos extends React.Component<Props> {

  public render() {
    return (
      <div className={css.photos}>

        photos
      </div>
    );
  }
}

export default Photos;
