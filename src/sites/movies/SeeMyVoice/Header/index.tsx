import React from 'react';
import cn from 'classnames';

import Bg from './Bg';

import award1 from 'sites/movies/SeeMyVoice/assets/awards/aof_2019/sm.png';
import award2 from 'sites/movies/SeeMyVoice/assets/awards/kino_duel/sm.png';
import award0 from 'sites/movies/SeeMyVoice/assets/awards/mfmk_kazan_2019/sm.png';

import css from './style.module.css';

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }: Props) => (
  <div className={cn(css.header, className)}>
    <Bg />
    <div className={css.title}>See my Voice</div>

    <div className={css.titleImg} />

    <button className={css.btnTrailer} type="button">
      View Trailer
    </button>

    <div className={css.awards}>
      <img src={award0} alt="" className={css.awardImg} />
      <img src={award1} alt="" className={css.awardImg} />
      <img src={award2} alt="" className={css.awardImg} />
    </div>
  </div>
);

export default Header;
