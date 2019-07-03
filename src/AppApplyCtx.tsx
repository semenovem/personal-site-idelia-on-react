import React from 'react';

import { WinSizeCtxCmp } from 'ctx/WinSize';
import { MusicPlayerCtxCmp } from 'ctx/MusicPlayer';
import { CountdownCtxCmp } from 'ctx/Countdown';
import { PageMgr } from 'ctx/PageMgr';

import App from './App';

const AppApplyCtx = () => (
  <WinSizeCtxCmp>
    <CountdownCtxCmp>
      <MusicPlayerCtxCmp>
        <PageMgr>
          <App />
        </PageMgr>
      </MusicPlayerCtxCmp>
    </CountdownCtxCmp>
  </WinSizeCtxCmp>
);

export default AppApplyCtx;
