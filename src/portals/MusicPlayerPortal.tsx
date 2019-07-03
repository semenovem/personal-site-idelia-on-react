import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactChild;
}

const domNode = document.getElementById('music-player');

if (!domNode) {
  throw new Error('no dom element defined "music-player"');
}

const MusicPlayerPortal = ({ children }: Props) => ReactDOM.createPortal(children, domNode);

export default MusicPlayerPortal;
