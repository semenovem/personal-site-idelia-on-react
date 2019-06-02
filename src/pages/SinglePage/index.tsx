import React from 'react';

import Header from 'mod/Header';
import Music from 'mod/Music';
import Videos from 'mod/Videos';
import Gallery from 'mod/Gallery';
import Bio from 'mod/Bio';
import Contact from 'mod/Contact';
import News from 'mod/News';
import Footer from 'mod/Footer';

interface IOwnProps {
  onOpenHamMenu: () => void;
}

type IProps = IOwnProps

class SinglePage extends React.Component<IProps> {
  state = {
    isOpenHamMenu: false,
  };

  public render() {
    const { onOpenHamMenu } = this.props;

    return (
      <>
        <Header
          onActOpenHamMenu={onOpenHamMenu}
        />
        <main>
          <Music />
          <Bio />
          <Videos />
          <Gallery />
          <News />
          <Contact />
        </main>

        <Footer />
      </>
    );
  }
}

export default SinglePage;
