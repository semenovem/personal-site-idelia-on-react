import React from 'react';
import cn from 'classnames';

import iconsFacebook from 'assets/icons/social/facefook_bw.svg';
import iconsInstagram from 'assets/icons/social/instagram_bw.svg';
import iconsSpotify from 'assets/icons/shops/spotify_white.svg';
import iconsITunes from 'assets/icons/shops/itunes_white.png';

import {SOCIAL} from 'types/social';

import cssTypography from 'styles/typography.module.css';
import css from './style.module.css';

interface IOwnProps {
  disableTagFooter?: true,
  offUserInteraction?: boolean;
}

interface IProps extends IOwnProps {}

class Footer extends React.Component<IProps> {
  private renderContentFooter() {
    const offUserInteraction = this.props.offUserInteraction;

    return (
      <>
        <div className={css.links}>
          <a
            href={SOCIAL.FACEBOOK.URL}
            target="_blank"
            rel="noopener noreferrer"
            {...(offUserInteraction && { tabIndex: -1})}
          >
            <img src={iconsFacebook} alt={SOCIAL.FACEBOOK.ALT}/>
          </a>

          <a
            href={SOCIAL.INSTAGRAM.URL}
            target="_blank"
            rel="noopener noreferrer"
            {...(offUserInteraction && { tabIndex: -1})}
          >
            <img src={iconsInstagram} alt={SOCIAL.INSTAGRAM.ALT}/>
          </a>

          <a
            href={SOCIAL.SPOTIFY.URL}
            target="_blank"
            rel="noopener noreferrer"
            {...(offUserInteraction && { tabIndex: -1})}
          >
            <img src={iconsSpotify} alt={SOCIAL.SPOTIFY.ALT}/>
          </a>

          <a
            href={SOCIAL.ITUNES.URL}
            target="_blank"
            rel="noopener noreferrer"
            {...(offUserInteraction && { tabIndex: -1})}
          >
            <img src={iconsITunes} alt={SOCIAL.ITUNES.ALT}/>
          </a>
        </div>

        <div className={cn(cssTypography.footerCopyright, css.copyright)}>
          an Eden park design
        </div>
      </>
    );
  }

  public render() {
    const { disableTagFooter } = this.props;

    return (
      disableTagFooter
        ? <div className={css.footer}>{this.renderContentFooter()}</div>
        : <footer className={css.footer}>{this.renderContentFooter()}</footer>
    );
  }
}

export default Footer;
