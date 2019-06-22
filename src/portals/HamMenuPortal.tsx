import React from 'react';
import ReactDOM from 'react-dom';

type IProps = {
  children: React.ReactChild;
};

const domNode = document.getElementById('ham-menu')!;

const HamMenuPortal = ({ children }: IProps) => (
  ReactDOM.createPortal(
    children,
    domNode,
  )
);

export default HamMenuPortal;
