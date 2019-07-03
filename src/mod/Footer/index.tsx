import React from 'react';
import cn from 'classnames';

import { withUserInteraction, PageMgrUserInteractionProps } from 'ctx/PageMgr';

import iconFacebook from 'assets/icons/social/facefook_bw.svg';
import iconInstagram from 'assets/icons/social/instagram_bw.svg';
import iconSpotify from 'assets/icons/shops/spotify_white.svg';
import iconITunes from 'assets/icons/shops/itunes_white.png';
import iconYandexMusic from 'assets/icons/shops/yandex_music_white.svg';

import {SOCIAL} from 'types/social';

import cssTypography from 'styles/typography.module.css';
import css from './style.module.css';

interface IOwnProps extends PageMgrUserInteractionProps {
  disableTagFooter?: true,
}

interface IProps extends IOwnProps {}

class Footer extends React.Component<IProps> {
  private renderContentFooter() {
    const { hasUserInteraction } = this.props;

    return (
      <>
        <div className={css.links}>
          <a
            href={SOCIAL.FACEBOOK.URL}
            target="_blank"
            rel="noopener noreferrer"
            {...!hasUserInteraction && { tabIndex: -1}}
          >
            <img src={iconFacebook} alt={SOCIAL.FACEBOOK.ALT}/>
          </a>

          <a
            href={SOCIAL.INSTAGRAM.URL}
            target="_blank"
            rel="noopener noreferrer"
            {...!hasUserInteraction && { tabIndex: -1}}
          >
            <img src={iconInstagram} alt={SOCIAL.INSTAGRAM.ALT}/>
          </a>

          <a
            href={SOCIAL.SPOTIFY.URL}
            target="_blank"
            rel="noopener noreferrer"
            {...!hasUserInteraction && { tabIndex: -1}}
          >
            <img src={iconSpotify} alt={SOCIAL.SPOTIFY.ALT}/>
          </a>

          <a
            href={SOCIAL.ITUNES.URL}
            target="_blank"
            rel="noopener noreferrer"
            {...!hasUserInteraction && { tabIndex: -1}}
          >
            <img src={iconITunes} alt={SOCIAL.ITUNES.ALT}/>
          </a>

          <a
            href={SOCIAL.YANDEX_MUSIC.URL}
            target="_blank"
            rel="noopener noreferrer"
            {...!hasUserInteraction && { tabIndex: -1}}
          >
            <img src={iconYandexMusic} alt={SOCIAL.YANDEX_MUSIC.ALT}/>
          </a>
        </div>

        <div className={cn(cssTypography.footerCopyright, css.copyright)}>
          Idelia Mars ®
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

export default withUserInteraction(Footer);
