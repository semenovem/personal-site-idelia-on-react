import React from 'react';
import { ModalBaseProps } from '../ModalBase/types';

export interface ModalMgrProps {
  onRequestClose?: (via: 'outside' | 'escape') => void;
}

// type ModalProps = Omit<ModalBaseProps, 'children' | 'className'>;
type ModalProps = Pick<ModalBaseProps, 'onRequestClose'>;
// Partial<Pick<IFocusableComponentProps, 'navDefault'>>

export interface MgrMethods {
  add(children: React.ReactNode, modalId: number, props: ModalProps): void;
  remove(id: number): void;
}

/**
 * Конфигурация для модального окна
 */
export interface ModalConfigProps {
  /**
   * css класс, применяемый всегда
   */
  className?: string;

  /**
   * Дефолтное значение типа модалки
   */
  defaultKind?: string;

  /**
   * Типы модальных окон
   */
  kinds?: {
    [kind: string]: {
      className?: string;
    };
  };
}

export interface ModalConfigInner extends ModalConfigProps {
  defaultKind: ModalConfigProps['defaultKind'];
  kinds: ModalConfigProps['kinds'];
}
