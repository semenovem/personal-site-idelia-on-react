import React from 'react';
import css from './style.module.css';


interface IOwnProps {
  onOpen: () => void
}

interface IProps extends IOwnProps {}

class HamMenu extends React.Component<IProps> {

    render() {
        return (
            <div className={css.header}>
                header
            </div>
        );
    }
}

export default HamMenu;
