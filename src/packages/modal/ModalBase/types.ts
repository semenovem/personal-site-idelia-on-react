import React from 'react';

import { Layout } from '../types';

export interface ModalBaseProps {
  children?: React.ReactNode;

  className?: string;

  style?: React.CSSProperties;

  /**
   * Открытие / закрытие модального окна
   * если `false` = в react и dom дереве будет null
   */
  isOpen?: boolean;

  /**
   * Если появляется перекрывающее modal, это сохранить в дереве react
   * У компонента, в таком случае не будет вызван unmount и последующий mount, когда эта модалка вновь станет видимой
   * @default true
   *
   * TODO еще не готово
   */
  isKeepTree?: boolean;

  /**
   * Метод для закрытия модалки
   * Закрыть модалку можно только снаружи - убрать из react дерева или свойством `isOpen={false}`
   * via - с помощью чего запрос на закрытие окна
   * Когда требуется блокировать закрытие модального окна - не передавать этот обработчик
   */
  onRequestClose?: (via?: 'cross' | 'outside' | 'escape' | 'program') => void;

  /**
   * Крестик закрытия
   */
  hasCrossClosing?: boolean;

  /**
   * Конфигурация способов закрытия окна
   */

  /*






 */

  /**
   * Разметка модального окна
   * @deprecated
   */
  layout?: Layout | string;

  /**
   * @deprecated
   */
  kind?: string;
}
