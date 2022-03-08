import React from 'react';

import imgSrc from 'assets/photos/0001.jpg';

import css from './css.module.css';

export default function Bio() {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <div className={css.bio}>
      <img src={imgSrc} alt="" className={css.img} />

      <div className={css.describe}>
        <h4 className={css.title}>IDELIA MARS</h4>
        <h5 className={css.subTitle}>Writer | Director</h5>

        <div className={css.text}>
          <p>
            Idelia is a Writer, Singer, Songwriter and Actress. She is an International Music talent
            in the genres of Pop, Electronic, Dance and R&B. She has an ability to sing in three
            languages: English, Russian and Tatar. She is also becoming fluent in Spanish so one day
            she can sing in Spanish as well.
          </p>

          <p>
            Born Ideliya Makarova, in the capital city of Kazan of the exotic Republic of Tatarstan,
            Russia. She grew up in a Tatar family surrounded with the love of music. Her father was
            a popular, classical music composer. He fondly stated, “As a child, Idelia loved
            performing for guests and writing beautiful poems. She felt a soulful connection to
            creativity from a very young age especially music .” Her father passed away on March
            16th 2016.
          </p>

          <div style={{ ...(!readMore && { display: 'none' }) }}>
            <p>
              Her mother made a contribution to the development of the Tatar Encyclopedia. But when
              she was younger she wanted to be a singer , because she has a great soprano voice.
              Both sides of Idelia’s Family are full of creative people. Her uncle from her mother’s
              side is also a very famous compose  r and singer in the Tatar Music World.
            </p>

            <p>
              Idelia’s television career began as early as the second grade. When she was cast by
              the producer of a theatrical television show for children. Later as a teenager Idelia
              was selected to host the Tatar Television Youth Program called “Yashlar Tuktalyshy”
              (“Youth stop”) and she revolutionized the program with a new freestyle format. She
              also, participated in music, choreography and acting classes. It was during this
              period of time, that Idelia realized she had something to share and she decided to
              follow her inspiration to pursue a career in music and entertainment.
            </p>

            <p>
              Recently Idelia made her Directorial debut with “See My Voice”. This film she wrote
              based off of her inspiring original song “My Voice” about the inner voice. Creative
              writing always being her biggest passion, but in this case she truly desired to work
              on a project that would combine her talents, as a writer and a singer. This is how
              “See My Voice” was born. She made this film to the memory of her father.
            </p>

            <p>
              In the future Idelia is planning to write a script for her first feature film in
              Fantasy genre to bring a new message to Humanity.
            </p>
          </div>

          <button
            className={css.noteTextReadMore}
            onClick={() => setReadMore(d => !d)}
            type="button"
          >
            {readMore ? 'Collapse' : 'Read more'}
          </button>

        </div>
      </div>
    </div>
  );
}
