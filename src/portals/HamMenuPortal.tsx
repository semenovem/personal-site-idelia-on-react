import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactChild;
}

const domNode = document.getElementById('ham-menu');

if (!domNode) {
  throw new Error('no dom element defined "ham-menu"');
}

const HamMenuPortal = ({ children }: Props) => ReactDOM.createPortal(children, domNode);

export default HamMenuPortal;
