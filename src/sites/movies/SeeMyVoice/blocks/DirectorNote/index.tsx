import React from 'react';
import cn from 'classnames';

import { WinSize, WinSizeCtx } from 'ctx/WinSize';
import BgNote from './BgNote';
import BgSynopsis from './BgSynopsis';
import VideoPlayer from './VideoPlayer';

import css from './css.module.css';

export default function DirectorNote() {
  const [shownNote, setShownNote] = React.useState(false);
  const winSize = React.useContext(WinSizeCtx);
  const isBiggerMD = winSize > WinSize.MD;
  const isCollapseTxt = isBiggerMD || winSize < WinSize.SM;

  return (
    <div className={css.directorNote}>
      <div className={css.note}>
        <BgNote className={css.bgNote} />

        {isBiggerMD && <VideoPlayer className={css.notePlayer} />}

        <div className={css.noteWrapText}>
          <h3 className={cn(css.title, css.noteTitle)}>Director’s Note</h3>

          <div className={css.noteText}>
            <p>
              “My task...is to make you hear, to make you feel - and, above all, to make you see.
              That is all, and it is everything.” (Joseph Conrad)
            </p>

            <p>
              This all started when I discovered my love for emotions. I love when people express
              different emotions and I want to make people experience them. I want to make people
              laugh, make them cry, make them think. I want to make people FEEL. That is what I want
              to do in this life.
            </p>

            <div style={{ ...(!shownNote && isCollapseTxt && { display: 'none' }) }}>
              <p>
                Ever since I was a kid, my imagination has been my strength. I wanted to create
                stories that people can relate to and sympathize with the characters. I could use my
                talent for Music and Writing for that purpose. I realized that this would be my
                contribution to humanity and my destiny.
              </p>

              <p>
                I am just as much a writer as I am a singer. I write my songs. My songs are my
                stories. This is my language to communicate with this World. Before writing the
                screenplay for my film, my desire was to combine all of my abilities into one place.
                I wanted to breathe life to my vision by utilizing the music that I love to write to
                tell a story that I felt passionate about. This is how the idea for the film came
                about. To create a story from my song. The song that I wrote was titled “My Voice”.
                I wrote that song about the inner voice to inspire people knowing that someday I
                would make a film about it. Eventually it happened because I felt so inspired,
                motivated and eager to deliver my message. I made this film to the memory of my
                father who passed away in 2016. The message is the most important part of any
                project that I work on. I want to give others hope and inspiration. I truly believe
                that we all have a power (light) inside of us. In our life, fear and negativity can
                be present and we are the only ones who can control it because in our heart, we know
                that we are part of the something bigger and more powerful. There is always better
                version of us and we should always seek that within ourselves.
              </p>

              <p>
                We have to face our fear, look right into its eyes - and we will overcome it!  
                Everyone will be able to relate to this film because inside we are all the same
                regardless of belief system, nationality, gender etc etc. We all have the light. All
                we have to do, is find who we are and to believe in ourselves.
              </p>
            </div>

            {isCollapseTxt && (
              <button
                className={css.noteTextReadMore}
                onClick={() => setShownNote(d => !d)}
                type="button"
              >
                {shownNote ? 'Collapse' : 'Read more'}
              </button>
            )}
          </div>
        </div>

      </div>

      <div className={css.synopsis}>
        <BgSynopsis className={css.bgSynopsis} />

        <div className={css.synopsisLayout}>
          <h3 className={cn(css.title, css.synopsisTitle)}>Synopsis</h3>

          <p className={css.synopsisText}>
            Every song has a story.... Annie feels a deep connection with music, as she has since
            she was a little girl. However, life events forced her to give up on her dream. Only a
            mystery woman on the edge of life and death can help her. But will this mystery woman be
            able to help bring back Annie’s dream or has Annie's fear grown bigger than her faith?
          </p>
          {!isBiggerMD && <VideoPlayer className={css.synopsisPlayer} />}
        </div>
      </div>
    </div>
  );
}
