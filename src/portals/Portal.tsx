import React from 'react';
import ReactDOM from 'react-dom';

type IProps = {
  children: React.ReactChild;
};

const domNode = document.body;

const Portal = ({ children }: IProps) => (
  ReactDOM.createPortal(
    children,
    domNode,
  )
);

export default Portal;
