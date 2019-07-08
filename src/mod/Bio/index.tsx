import React from 'react';
import cn from 'classnames';

import { ROUTES } from 'types/routes';
import { withUserInteraction, PageMgrUserInteractionProps } from 'ctx/PageMgr';

import cssCommon from 'styles/common.module.css';
import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import Bg from './Background';
import css from './style.module.css';

interface OwnProps {
  className?: string;
}

type Props = OwnProps & PageMgrUserInteractionProps;

interface State {
  shownAdditionalText: boolean;
}

class Bio extends React.Component<Props, State> {
  public state = {
    shownAdditionalText: false,
  };

  private handleReadMore = () => {
    const { shownAdditionalText } = this.state;

    this.setState({
      shownAdditionalText: !shownAdditionalText,
    });
  };

  public render() {
    const { className, hasUserInteraction } = this.props;
    const { shownAdditionalText: shown } = this.state;

    return (
      <div id={ROUTES.BIO.HTML_ID} className={cn(cssMod.mod, css.bio, className)}>
        <Bg className={css.bg} />
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.BIO.TITLE}</h2>

        <div className={cn(cssTypography.textBio)}>
          <p>
            Idelia Mars is an international talent - a singer, songwriter and an actress. She has
            recorded Music in English, Russian and Tatar in the genres of Pop/Electronic/Dance/R&B.
            Her broad range of skills and experience has enabled her to become an extraordinary
            entertainer.
          </p>

          <div className={cn(css.extended, !shown && css.hide)}>
            <p>
              Idelia was born in Kazan, the capital city of the exotic Republic of Tatarstan,
              Russia. She grew up in a Tatar family surrounded with the love of music. Her father
              was a popular, classical music composer. He fondly stated, “As a child, Idelia loved
              performing for guests and writing beautiful poems. She felt a soulful connection to
              creativity from a very young age, especially music.” Her father passed away on March
              16th 2016.
            </p>

            <p>
              Her mother made a contribution to the development of the Tatar Encyclopedia. When she
              was younger she wanted to be a singer because she has a great soprano voice. Both
              sides of Idelia’s Family are full of creative people. Her uncle from her mother’s side
              is also a very famous composer and singer in the Tatar Music World.
            </p>

            <p>
              Idelia’s television career began as early as the second grade. She was cast by the
              producer of a theatrical television show for children. Later as a teenager Idelia was
              selected to host the Tatar Television Youth Program called “Yashlar Tuktalyshy”
              (“Youth stop”) and she revolutionized the program with a new freestyle format. It was
              during that period of time, when Idelia realized she had something to share and she
              decided to follow her inspiration to pursue a career in music and entertainment.
            </p>

            <p>
              As a teenager Idelia discovered her love for pop / techno /dance music. She took
              music, choreography and acting classes. Her unique, seductive voice and artistic
              expressions captured the hearts of many. Idelia enjoys a “hands on” approach in the
              creation and production of her music - writing lyrics, creating melodies, harmonies,
              and hooks as well as dancing, acting and directing her music videos. Her music,
              charisma and rebellious nature have caught the attention of young adult fans and the
              media, resulting in several appearances on television and interviews in newspapers and
              magazines.
            </p>

            <p>
              Recently Idelia made her Directorial debut with “See My Voice” short film. The film
              she wrote based off of her inspiring original song “My Voice” about the inner voice.
              Creative writing always being her biggest passion, but in this case she truly desired
              to work on a project that would combine her talents as a writer and a singer. This is
              how “See My Voice” was born. She dedicated this film to the memory of her father. She
              plans to continue writing more films.
            </p>

            <p>
              Idelia currently resides in Miami, Florida, US. With a strong and growing fan base she
              continues her artistic evolution.
            </p>
          </div>

          <button
            className={cn(cssCommon.btnGrape, cssTypography.btnOrange, css.readMore)}
            onClick={this.handleReadMore}
            {...(!hasUserInteraction && { tabIndex: -1 })}
            type="button"
          >
            {shown ? 'Collapse' : 'Read more'}
          </button>
        </div>
      </div>
    );
  }
}

export default withUserInteraction(Bio);
