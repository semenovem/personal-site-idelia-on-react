import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
}

const domNode = document.getElementById('splash-pages');

if (!domNode) {
  throw new Error('no dom element defined "splash-pages"');
}

const SplashPagePortal = ({ children }: Props) => ReactDOM.createPortal(children, domNode);

export default SplashPagePortal;
