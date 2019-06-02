import React from 'react';

import { WinSizeCtxCmp } from 'ctx/WinSize';
import { BodyScrollCtxCmp } from 'ctx/BodyScroll';
import { MusicPlayerCtxCmp } from 'ctx/MusicPlayer';

import App from './App';

const AppApplyCtx = () => (
    <BodyScrollCtxCmp>
      <WinSizeCtxCmp>
        <MusicPlayerCtxCmp>
          <App/>
        </MusicPlayerCtxCmp>
      </WinSizeCtxCmp>
    </BodyScrollCtxCmp>
);

export default AppApplyCtx;
