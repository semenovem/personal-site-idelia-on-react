import React from 'react';
import Header from 'mod/Header';
import Music from 'mod/Music';
import HamMenu from 'mod/HamMenu';
import {IModItem} from 'types/routes';

interface IProps {}

interface IState {
  isOpenHamMenu: boolean;
}

class SinglePage extends React.Component<IProps, IState> {

  state = {
    isOpenHamMenu: false,
  };

  // TODO предотвратить повторную установку одних и тех же значений
  private handleOpenHamMenu = () => this.setState({ isOpenHamMenu: true, });
  private handleCloseHamMenu = () => this.setState({ isOpenHamMenu: false });


  private handleSelectMenuItem = (id: IModItem['ID']) => {
    console.log('handleSelectMenuItem: ' + id);
  };


  public render() {
    const { isOpenHamMenu } = this.state;

    return (
      <>
        <Header onActOpenHamMenu={this.handleOpenHamMenu} hasUserInteraction={!isOpenHamMenu}/>
        <Music hasUserInteraction={!isOpenHamMenu}/>

        <header>header</header>
        <main>main</main>
        <footer>footer</footer>


        <HamMenu
          isOpen={isOpenHamMenu}
          onClose={this.handleCloseHamMenu}
          onSelect={this.handleSelectMenuItem}
        />
      </>
    );
  }
}

export default SinglePage;
