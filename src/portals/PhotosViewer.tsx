import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactChild;
}

const domNode = document.getElementById('photos-viewer');

if (!domNode) {
  throw new Error('no dom element defined "photos-viewer"');
}

const PhotosViewer = ({ children }: Props) => ReactDOM.createPortal(children, domNode);

export default PhotosViewer;
