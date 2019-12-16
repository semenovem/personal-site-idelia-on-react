import React from 'react';

import { MgrMethods, ModalConfigInner } from './Mgr/types';
import { KeyboardMgr, Layout } from './types';

export interface ModalConfigCtxValue {
  mgr: MgrMethods | undefined;
  setShown(shown: boolean): void;
  setMgr(mgr: MgrMethods): void;
  keyboardMgr?: KeyboardMgr;

  /**
   * Настройки фона
   */
  fon: {
    className?: string;
    style?: React.CSSProperties;

    showUp?: string;
    showUpStyle?: React.CSSProperties;
    hideDown?: string;
    hideDownStyle?: React.CSSProperties;
  };

  /**
   * Анимация для модальных окон
   */
  anim: {
    showUp?: string;
    showUpStyle?: React.CSSProperties;
    hideDown?: string;
    hideDownStyle?: React.CSSProperties;
  };

  /**
   * Разметки модальных окон
   */
  layouts: {
    [layout: string]: Layout;
  };

  /**
   * Разметка для модалки по умолчанию
   */
  defaultLayout: string;

  /**
   * @deprecated
   */
  config: ModalConfigInner;
}

export const ModalConfigCtx = React.createContext<ModalConfigCtxValue>({
  mgr: undefined,
  config: {
    defaultKind: '',
    kinds: {},
  },
  setShown() {},
  setMgr() {},
  fon: {},
  anim: {},
  layouts: {},
  defaultLayout: 'default',
});

export const ModalShownCtx = React.createContext<boolean>(false);

if (process.env.NODE_ENV !== 'production') {
  ModalConfigCtx.displayName = 'ModalConfigCtx';
  ModalShownCtx.displayName = 'ModalShownCtx';
}
