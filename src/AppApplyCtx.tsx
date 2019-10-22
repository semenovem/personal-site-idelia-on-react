import React from 'react';

import { WinSizeCtxCmp } from 'ctx/WinSize';
import { MusicPlayerCtxCmp } from 'ctx/MusicPlayer';
import { CountdownCtxCmp } from 'ctx/Countdown';
import { PageMgr } from 'ctx/PageMgr';
import { MenuCtxCmp } from 'ctx/Menu';

import App from './App';
import AppNext from './App@next';

const AppApplyCtx = () => (
  <WinSizeCtxCmp>
    <CountdownCtxCmp>
      <MenuCtxCmp>
        <MusicPlayerCtxCmp>
          <PageMgr>
            <AppNext />
          </PageMgr>
        </MusicPlayerCtxCmp>
      </MenuCtxCmp>
    </CountdownCtxCmp>
  </WinSizeCtxCmp>
);

export default AppApplyCtx;
