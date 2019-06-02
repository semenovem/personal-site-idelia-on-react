import React from 'react';
import ReactDOM from 'react-dom';

type IProps = {
  children: React.ReactChild;
};

const domNode = document.getElementById('splash-page-root')!;

const SplashPagePortal = ({ children }: IProps) => (
  ReactDOM.createPortal(
    children,
    domNode,
  )
);

export default SplashPagePortal;
