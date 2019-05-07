import React from 'react';
import cn from 'classnames';
import css from './style.module.css';


interface IOwnProps {
  className: string;
  onOpen: () => void
}

interface IProps extends IOwnProps {
}

class HamMenu extends React.Component<IProps> {


  render() {
    const { className } = this.props;

    return (
      <button className={cn(css.hamMenu, className)}/>
    );
  }
}

export default HamMenu;
