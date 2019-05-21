import React, {ChangeEvent} from 'react';
import cn from 'classnames';

import {ROUTES} from 'types/routes';
import {IModProps} from 'mod/types';

import cssCommon from 'styles/common.module.css';
import cssTypography from 'styles/typography.module.css';
import cssMod from 'mod/style.module.css';
import css from './style.module.css';

interface IOwnProps extends IModProps {
}

interface IProps extends IOwnProps {
}

interface IState {
  name: string;
  email: string;
  message: string;
}

class Contact extends React.Component<IProps, IState> {
  public state = {
    name: '',
    email: '',
    message: '',
  };

  private handleChangeName = (e: ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value });
  private handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value });
  private handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => this.setState({ message: e.target.value });

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  public render() {
    const { name, email, message, } = this.state;

    return (
      <div id={ROUTES.CONTACT.HTML_ID} className={cn(cssMod.mod, css.contact)}>
        <h2 className={cn(cssTypography.modTitle, cssMod.titleHigh)}>{ROUTES.CONTACT.TITLE}</h2>

        <form className={cn(css.form, cssTypography.modContactInput)} onSubmit={this.handleSubmit}>
          <input className={cn(css.field, css.name)} name='name' value={name} placeholder='Name' onChange={this.handleChangeName}/>
          <input className={cn(css.field, css.email)} name='email' value={email} placeholder='Email ID' onChange={this.handleChangeEmail} type='email'/>
          <textarea className={cn(css.field, css.msg)} name='message' value={message} placeholder='message' onChange={this.handleChangeMessage} rows={4}/>

          <div className={css.sendWrap}>
            <button type='submit' className={cn(cssCommon.btnGrape, cssTypography.btnOrange, css.send)}>Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
