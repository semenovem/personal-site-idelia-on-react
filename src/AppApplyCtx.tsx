import React from 'react';

import { WinSizeCtxCmp } from 'ctx/WinSize';
import { BodyScrollCtxCmp } from 'ctx/BodyScroll';
import { MusicPlayerCtxCmp } from 'ctx/MusicPlayer';
import { CountdownCtxCmp } from 'ctx/Countdown';

import App from './App';

const AppApplyCtx = () => (
    <BodyScrollCtxCmp>
      <WinSizeCtxCmp>
        <CountdownCtxCmp>
          <MusicPlayerCtxCmp>
            <App/>
          </MusicPlayerCtxCmp>
        </CountdownCtxCmp>
      </WinSizeCtxCmp>
    </BodyScrollCtxCmp>
);

export default AppApplyCtx;
