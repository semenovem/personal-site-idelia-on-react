import React from 'react';

import { MgrMethods } from './Mgr/types';

import { KeyboardMgr, Layout } from './types';

import { ModalConfigCtx, ModalShownCtx, ModalConfigCtxValue } from './Ctx';
import Portal from './Portal';
import { parseModalConfig } from './parseModalConfig';

interface Props {
  /**
   * dom элемент для размещения react-portal
   */
  domElem: HTMLElement;
  keyboardMgr?: KeyboardMgr;

  /**
   * Настройки фона/анимации
   */
  fon?: ModalConfigCtxValue['fon'];

  /**
   * Анимации для появления/скрытия модальных окон
   */
  anim?: ModalConfigCtxValue['anim'];

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
}

interface State {
  modalConfig: ModalConfigCtxValue;
  shown: boolean;
}

/**
 * Провайдер модальных окон
 * Рендерим один раз. Изменения модальных окон смотри в Manager
 */
class ModalProvider extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      modalConfig: {
        mgr: undefined,
        keyboardMgr: this.props.keyboardMgr,
        setShown: this.setVisibility,
        setMgr: this.setMgr,
        config: parseModalConfig({}),
        fon: {
          ...props.fon,
        },
        anim: {
          ...props.anim,
        },
        layouts: {
          ...props.layouts,
        },
        defaultLayout: props.defaultLayout,
      },
      shown: false,
    };
  }

  private setMgr = (mgr: MgrMethods) => {
    this.setState(state => ({
      modalConfig: {
        ...state.modalConfig,
        mgr,
      },
    }));
  };

  private setVisibility = (visible: boolean) => {
    if (this.state.shown !== visible) {
      this.setState({
        shown: visible,
      });
    }
  };

  public render() {
    const { props } = this;
    const { state } = this;

    return (
      <ModalConfigCtx.Provider value={state.modalConfig}>
        <ModalShownCtx.Provider value={state.shown}>{props.children}</ModalShownCtx.Provider>
        <Portal domElem={props.domElem} />
      </ModalConfigCtx.Provider>
    );
  }
}

export default ModalProvider;
