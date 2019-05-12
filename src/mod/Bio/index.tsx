import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import {IModProps} from 'mod/types';
import Footer from 'mod/Footer';
import BtnHamMenu from "cmp/BtnHamMenu";
import BtnBack from "cmp/BtnBack";

import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';


interface IOwnProps extends IModProps {
  className?: string;
  onActOpenHamMenu: () => void;
  onClose: () => void;
}

interface IProps extends IOwnProps {
}

class Bio extends React.Component<IProps> {
  public componentWillMount(): void {
    window.addEventListener('keyup', this.handleKeyUp)
  }

  public componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  private handleKeyUp = (event: KeyboardEvent): void => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };


  render() {
    const { className, onActOpenHamMenu, onClose } = this.props;

    return (
      <div id={ROUTES.BIO.HTML_ID} className={cn(css.bio, className)}>
        <div className={cn(cssMod.mod, css.content)}>
          <BtnBack
            className={cssMod.btnBack}
            onBack={onClose}
          />

          <BtnHamMenu
            className={cssMod.btnHamMenu}
            onOpen={onActOpenHamMenu}
          />

          <h2 className={cssTypography.modTitle}>{ROUTES.BIO.TITLE}</h2>


          <div className={cn(cssTypography.textBio, css.note)}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
              lacus vel facilisis.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
              lacus vel facilisis.
            </p>
          </div>


        </div>


        <Footer disableTagFooter/>
      </div>
    );
  }
}

export default Bio;


