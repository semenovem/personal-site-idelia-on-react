import React from 'react';
import cn from 'classnames';

import award1 from 'sites/movies/SeeMyVoice/assets/awards/aof_2019/sm.png';
import award2 from 'sites/movies/SeeMyVoice/assets/awards/kino_duel/sm.png';
import award0 from 'sites/movies/SeeMyVoice/assets/awards/mfmk_kazan_2019/sm.png';
import amazonIcon from 'assets/icons/social/amazon.png';

import Bg from './Bg';

import css from './style.module.css';

interface Props {
  className?: string;
}

const urlAmazon = 'https://www.amazon.com/See-My-Voice-Idelia-Mars/dp/B08C6F92PC/';

export default function Header({ className }: Props) {
  const handleViewTrailer = React.useCallback(() => {
    const elem = document.getElementById('movie-see-my-voice-player');
    if (!elem) {
      return;
    }

    elem.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className={cn(css.header, className)}>
      <Bg className={css.bg} />

      <div className={css.amazon}>
        <span className={css.amazonAvailable}>NOW AVAILABLE</span>
        <a href={urlAmazon} target="_blank" rel="noopener noreferrer">
          <img className={css.amazonIcon} src={amazonIcon} alt="icon" />
        </a>
      </div>

      <div className={css.titleImg} />

      <button className={css.btnTrailer} type="button" onClick={handleViewTrailer}>
        View Trailer
      </button>

      <div className={css.awards}>
        <img src={award0} alt="" className={css.awardImg} />
        <img src={award1} alt="" className={css.awardImg} />
        <img src={award2} alt="" className={css.awardImg} />
      </div>
    </div>
  );
}
