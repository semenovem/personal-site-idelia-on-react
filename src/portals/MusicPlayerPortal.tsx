import React from 'react';
import ReactDOM from 'react-dom';

type IProps = {
  children: React.ReactChild;
};

const domNode = document.getElementById('music-player')!;

const MusicPlayerPortal = ({ children }: IProps) => (
  ReactDOM.createPortal(
    children,
    domNode,
  )
);

export default MusicPlayerPortal;
