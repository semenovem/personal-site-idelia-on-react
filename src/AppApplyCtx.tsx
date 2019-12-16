import React from 'react';

import { WinSizeCtxCmp } from 'ctx/WinSize';
import { MusicPlayerCtxCmp } from 'ctx/MusicPlayer';
import { CountdownCtxCmp } from 'ctx/Countdown';
import { PageMgr } from 'ctx/PageMgr';
import { MenuCtxCmp } from 'ctx/Menu';
import { ModalProvider, withHocModalShown} from 'packages/modal';
import { addKeyListener, removeKeyListener, Key } from 'packages/keyboardManager';
import css from './modal-provider.module.css';

import { DevModal } from './DevModal';

import AppNext from './App@next';


const DevModalWithCtx = withHocModalShown(DevModal);

const node = document.createElement('div');
document.body.append(node);

const AppApplyCtx = () => (
  <ModalProvider
    domElem={node}
    keyboardMgr={{
      addListener: adapterAddKeyListener,
      removeListener: removeKeyListener,
    }}
    layouts={{
      interaction: LayoutHeadMainFooter,
    }}
    defaultLayout="interaction"
  >
    <WinSizeCtxCmp>
      <CountdownCtxCmp>
        <MenuCtxCmp>
          <MusicPlayerCtxCmp>
            <PageMgr>
              {/*<AppNext />*/}

              <DevModalWithCtx />
            </PageMgr>
          </MusicPlayerCtxCmp>
        </MenuCtxCmp>
      </CountdownCtxCmp>
    </WinSizeCtxCmp>
  </ModalProvider>
);

export default AppApplyCtx;

/**
 * Адаптер для сервиса подписки на события клавиатуры
 */
function adapterAddKeyListener(handler: (event: KeyboardEvent) => void) {
  addKeyListener(handler, { key: Key.ESCAPE, eventName: 'keyup' });
}

/*
\\
''
\\
 */

export function LayoutHeadMainFooter({
  header,
  content,
  footer,
}: {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className={css.layout0}>
      <div>{header}</div>
      <div>{content}</div>
      <div>{footer}</div>
    </div>
  );
}
