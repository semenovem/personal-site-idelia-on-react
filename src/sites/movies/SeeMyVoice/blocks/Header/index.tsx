import React from 'react';
import cn from 'classnames';

import award1 from 'sites/movies/SeeMyVoice/assets/awards/aof_2019/sm.png';
import award2 from 'sites/movies/SeeMyVoice/assets/awards/kino_duel/sm.png';
import award0 from 'sites/movies/SeeMyVoice/assets/awards/mfmk_kazan_2019/sm.png';

import Bg from './Bg';

import css from './style.module.css';

interface Props {
  className?: string;
}

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
      <div />

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
