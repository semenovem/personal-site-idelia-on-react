import React from 'react';

import { ModalBaseProps } from './types';
import { MgrMethods } from '../Mgr/types';

export default class ModalBase extends React.Component<ModalBaseProps & { mgr: MgrMethods }> {
  public static defaultProps = {
    isOpen: true,
  };

  private static countId: number = 0;

  private isAddedToMgr = false;

  private isBlockingClosing = false;

  private modalId = ++ModalBase.countId;

  public componentDidMount() {
    this.useEffectAfterRender();
  }

  public componentDidUpdate() {
    this.useEffectAfterRender();
  }

  public componentWillUnmount() {
    this.removeFromMgr();
  }

  /**
   * Блокировка закрытия модального окна
   */
  private setBlockingClosing = (blocking: boolean) => {
    if (this.isBlockingClosing === blocking) {
      return;
    }
    this.isBlockingClosing = blocking;

    if (this.props.hasCrossClosing) {
      this.forceUpdate();
    }
  };

  /**
   * Удалить модальное окно из менеджера модальных окон
   */
  private removeFromMgr(): void {
    if (this.isAddedToMgr) {
      this.props.mgr.remove(this.modalId);
    }
  }

  /**
   * Запрос на закрытие модального окна
   *
   * todo убрать "опциональность" у аргумента метода
   */
  private handleRequestClose = (via?: 'cross' | 'outside' | 'escape' | 'program'): void => {
    if (!this.isBlockingClosing && this.props.onRequestClose) {
      this.props.onRequestClose(via);
    }
  };

  /**
   * Логика для выполнения после каждого рендеринга компонента
   * аналогично useEffect
   */
  private useEffectAfterRender() {
    if (this.props.isOpen) {
      this.addToMgr();
    } else {
      this.removeFromMgr();
    }
  }

  /**
   * Добавить модальное окно в менеджер модальных
   */
  private addToMgr(): void {
    const { mgr, children } = this.props;

    if (!this.isAddedToMgr) {
      this.isAddedToMgr = true;
    }

    mgr.add(children, this.modalId, {
      onRequestClose: this.handleRequestClose,
    });
  }

  public render() {
    return null;
  }
}

/*

   <div
        className={cn(className, config.className, kindConfig.className)}
        {...(this.props.style && { style: this.props.style })}
      >
        {!this.isBlockingClosing && hasCrossClosing && (
          <button
            type="button"
            style={{
              width: '32px',
              height: '32px',
              position: 'absolute',
              top: '12px',
              right: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={this.handleCrossBtn}
          >
            <img src={icon} alt="" />
          </button>
        )}
        {children}
      </div>,

 */
