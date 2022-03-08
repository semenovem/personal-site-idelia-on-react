import React, { ChangeEvent } from 'react';
import cn from 'classnames';

import { ROUTES } from 'types/routes';
import { withUserInteraction, PageMgrUserInteractionProps } from 'ctx/PageMgr';

import cssCommon from 'sites/Music/styles/common.module.css';
import cssTypography from 'sites/Music/styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import Bg from './Background';
import css from './style.module.css';

interface OwnProps extends PageMgrUserInteractionProps {}

interface State {
  name: string;
  email: string;
  message: string;
}

class Contact extends React.Component<OwnProps, State> {
  public state = {
    name: '',
    email: '',
    message: '',
  };

  private handleChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({ name: e.target.value });
  private handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({ email: e.target.value });
  private handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>
    this.setState({ message: e.target.value });

  public render() {
    const { hasUserInteraction } = this.props;
    const { name, email, message } = this.state;

    return (
      <div id={ROUTES.CONTACT.HTML_ID} className={cn(cssMod.mod, css.contact)}>
        <Bg className={css.bg} />
        <h2 className={cn(cssTypography.modTitle, cssMod.title)}>{ROUTES.CONTACT.TITLE}</h2>

        <form
          className={cn(css.form, cssTypography.modContactInput)}
          action="https://formforsite.com/send/dmVyaWF0b2Q4NTI0QG1haWwucnU"
          method="POST"
        >
          <input name="_site" type="hidden" value="ideliamarsmusic.com" />
          <input name="_form" type="hidden" value="Contact Form" />

          <input
            name="_error-page-redirect"
            type="hidden"
            value="http://ideliamarsmusic.com/#contact"
          />
          <input
            name="_success-page-redirect"
            type="hidden"
            value="http://ideliamarsmusic.com/#contact"
          />

          <div className={css.rowOne}>
            <input
              className={cn(css.field, css.name)}
              name="name"
              value={name}
              placeholder="Name"
              onChange={this.handleChangeName}
              {...(!hasUserInteraction && { tabIndex: -1 })}
            />

            <input
              className={cn(css.field, css.email)}
              name="email"
              value={email}
              placeholder="Email ID"
              onChange={this.handleChangeEmail}
              type="email"
              {...(!hasUserInteraction && { tabIndex: -1 })}
            />
          </div>

          <textarea
            className={cn(css.field, css.msg)}
            name="message"
            value={message}
            placeholder="message"
            onChange={this.handleChangeMessage}
            rows={4}
            {...(!hasUserInteraction && { tabIndex: -1 })}
          />

          <div className={css.sendWrap}>
            <button
              type="submit"
              className={cn(cssCommon.btnGrape, cssTypography.btnOrange, css.send)}
              {...(!hasUserInteraction && { tabIndex: -1 })}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withUserInteraction(Contact);
