import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface Props {
  className?: string;
}

export default function VideoPlayer({ className }: Props) {
  return (
    <iframe
      title="youtube"
      id="movie-see-my-voice-player"
      className={cn(css.player, className)}
      src="https://www.youtube.com/embed/DsfS2N6NHcc?controls=0&modestbranding=1&enablejsapi=1"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  );
}
