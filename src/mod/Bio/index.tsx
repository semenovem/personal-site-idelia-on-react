import React from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import {IOffTabIndex, withOffTabIndexCtx} from 'ctx/OffTabIndex';

import Bg from './Background';

import cssCommon from 'styles/common.module.css';
import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';


interface IOwnProps {
  className?: string;
}

type IProps = IOwnProps & IOffTabIndex;

interface IState {
  shownAdditionalText: boolean;
  addedAnim: boolean,
}

class Bio extends React.Component<IProps, IState> {

  public state = {
    shownAdditionalText: false,
    addedAnim: false,
  };

  private handleReadMore = () => {
    this.setState({
      shownAdditionalText: !this.state.shownAdditionalText
    });
  };

  public render() {
    const {className, offTabIndex } = this.props;
    const {shownAdditionalText: shown} = this.state;

    return (
      <Bg id={ROUTES.BIO.HTML_ID} className={cn(cssMod.mod, css.bio, className)}>
        <h2 className={cn(cssMod.title, css.title)}>
          <div className={cn(cssTypography.modTitleBioLastName, css.lastName)}>Idelia</div>
          <div className={cssTypography.modTitleBioFirstName}>Mars</div>
        </h2>


        <div className={cn(cssTypography.textBio)}>
          <p>
            Idelia is a Singer, Songwriter, Writer and Actress. She is an International Music talent in the genres of
            Pop, Electronic, Dance and R&B. She has an ability to sing in three languages: English, Russian and Tatar.
            She is also becoming fluent in Spanish so one day she can sing in Spanish as well.
          </p>


          <div className={cn(css.extended, !shown && css.hide)}>
              <p>
                When she used to live in Russia, Idelia had two record deals and published two albums with those
                companies.
                Some of her songs became very popular and hit the spot number one on the radio charts. She gave a new
                direction to the Tatar Music, combining traditional elements with hot European dance beats. She became
                one of
                the Tatar artists who changed the Tatar Music.
              </p>

              <p>
                Born Ideliya Makarova, in the capital city of Kazan of the exotic Republic of Tatarstan, Russia. She
                grew up
                in a Tatar family surrounded with the love of music. Her father was a popular, classical music composer.
                He
                fondly stated, “As a child, Idelia loved performing for guests and writing beautiful poems. She felt a
                soulful
                connection to creativity from a very young age especially music .” Her father passed away on March 16th
                2016.
              </p>

              <p>
                Her mother made a contribution to the development of the Tatar Encyclopedia. But when she was younger
                she
                wanted to be a singer , because she has a great soprano voice. Both sides of Idelia’s Family are full of
                creative people. Her uncle from her mother’s side is also a very famous composer and singer in the Tatar
                Music
                World.
              </p>

              <p>
                Idelia also worked on TV since she was a kid. Idelia’s television career began as early as the second
                grade.
                When she was cast by the producer of a theatrical television show for children. Later as a teenager
                Idelia was
                selected to host the Tatar Television Youth Program called “Yashlar Tuktalyshy” (“Youth stop”) and she
                revolutionized the program with a new freestyle format. She also, participated in music, choreography
                and
                acting classes. It was during this period of time, that Idelia realized she had something to share and
                she
                decided to follow her inspiration to pursue a career in music and entertainment.
              </p>

              <p>
                Recently Idelia made her Directorial debut with “See My Voice”. This film she wrote based off of her
                inspiring
                original song “My Voice” about the inner voice. Creative writing always being her biggest passion, but
                in this
                case she truly desired to work on a project that would combine her talents, as a writer and a singer.
                This is
                how “See My Voice” was born. She made this film to the memory of her father.
              </p>

              <p>
                In the future Idelia is planning to write a script for her first feature film in Fantasy genre to bring
                a new
                message to Humanity. She also always works on some new music.
              </p>
          </div>


          <button
            className={cn(cssCommon.btnGrape, cssTypography.btnOrange, css.readMore)}
            onClick={this.handleReadMore}
            {...offTabIndex && {tabIndex:-1}}
          >
            {shown ? 'Collapse' : 'Read more' }
          </button>

        </div>
      </Bg>
    );
  }
}

export default withOffTabIndexCtx(Bio);


