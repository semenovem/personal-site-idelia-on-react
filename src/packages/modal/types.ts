import React from 'react';
import { ModalBaseProps } from './ModalBase/types';

type Handler = (event: KeyboardEvent) => void;

export interface KeyboardMgr {
  addListener(handler: Handler): void;
  removeListener(handler: Handler): void;
}

/**
 * Обработчик кнопки закрытия модалки
 */
export interface CrossClosing {
  onCrossClosing?(): void;
}

/**
 * Пропсы для компонента-разметки модального окна
 * Компонент Layout может дать возможность кликнут на крестик закрытия
 */
export type LayoutProps = CrossClosing &
  Omit<ModalBaseProps, 'layout' | 'kind' | 'isOpen' | 'isKeepTree' | 'onRequestClose'>;

/**
 * Компонент для разметки модального окна
 */
export type Layout = React.FC<any> | React.ComponentClass<any>;
