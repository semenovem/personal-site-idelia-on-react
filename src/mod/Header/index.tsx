import React from 'react';
import { IModProps } from 'mod/types';

import css from './style.module.css';

interface IOwnProps extends IModProps {}
interface IProps extends IOwnProps {}

export default class Header extends React.Component<IProps> {
    render() {
        const props = this.props;

        return (
            <div id={props.htmlId} className={css.header}>
                Header
            </div>
        );
    }
}