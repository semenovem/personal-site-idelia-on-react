import React from 'react';
import ReactDOM from 'react-dom';

import { HocMgr } from './Mgr';

interface Props {
  domElem: HTMLElement;
}

/**
 * Портал для модального окна
 * Рендерим один раз
 * Изменения модальных окон смотри в Manager
 */
function Portal(props: Props) {
  return ReactDOM.createPortal(<HocMgr />, props.domElem);
}

export default React.memo(Portal);
