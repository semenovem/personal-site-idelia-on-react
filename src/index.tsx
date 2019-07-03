import React from 'react';
import { hydrate, render } from 'react-dom';
import AppApplyCtx from './AppApplyCtx';
import * as serviceWorker from './serviceWorker';

const rootElement: HTMLElement | null = document.getElementById('root');

if (!rootElement) {
  throw new Error('Not found dom element `id:root`');
}

if (rootElement.hasChildNodes()) {
  hydrate(<AppApplyCtx />, rootElement);
} else {
  render(<AppApplyCtx />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
