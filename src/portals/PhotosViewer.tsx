import React from 'react';
import ReactDOM from 'react-dom';

type IProps = {
  children: React.ReactChild;
};

const domNode = document.getElementById('photos-viewer')!;

const PhotosViewer = ({ children }: IProps) => (
  ReactDOM.createPortal(
    children,
    domNode,
  )
);

export default PhotosViewer;
