import React from 'react';
import cn from 'classnames';

import { ModalConfigCtx, ModalConfigCtxValue } from '../Ctx';

import { MgrMethods, ModalMgrProps } from './types';

import css from './style.module.css';

interface KeepModal {
  elem: React.ReactNode;
  modalId: number;
  modalMgrProps: ModalMgrProps;
  timeCreate: number;
}

interface State {
  /**
   * Удаляемый элемент
   */
  hiddenElem?: KeepModal | undefined;
}

const HIDING_DELAY = 200;

/**
 * Менеджер модальных окон
 * Одновременно видимым может быть только одно модальное окно
 * Посленее добавленное в react-tree будет видимым
 *
 * TODO изменить поведение по умолчанию, что бы ниже-лежащие окна оставались в дереве реакта - под затемнением
 * Не видимые модальные окна не присутствуют в react-tree и dom
 * В связи с этим нужно ожидать вызов componentWillUnmount у ниже лежащего окна
 * Можно изменить это поведение, передав props .....
 *
 */
export default class Mgr extends React.Component<ModalConfigCtxValue, State> implements MgrMethods {
  private static MIN_TIME_OPENED = 300;

  /**
   * Минимальное время блокировки кликов на закрытие модалки сразу после ее откртия
   * что бы двойными кликами случайно не закрывать только что открытое модальное окно
   */
  private static CLICK_BLOCKING_AFTER_OPENING = 300;

  public state: State = {
    hiddenElem: undefined,
  };

  /**
   * Стек модалок
   */
  private stack: KeepModal[] = [];

  /**
   * Значение содержимого стека на предыдущем render
   */
  private prevStackEmpty: boolean = true;

  private enableHandleOutsideClick = false;

  private mousePress = false;

  /**
   * Таймер скрытия
   */
  private hideTimer: ReturnType<typeof setTimeout> | 0 = 0;

  public componentDidMount() {
    if (this.stack.length) {
      this.enableHandleClick();
      this.enableHandleKeyUp();
    }
  }

  public componentDidUpdate(): void {
    if ((this.stack.length === 0) !== this.prevStackEmpty) {
      // eslint-disable-next-line no-multi-assign
      const empty = (this.prevStackEmpty = !this.prevStackEmpty);

      this.props.setShown(!empty);
      if (empty) {
        this.disableHandleClick();
        this.disableHandleKeyUp();
      } else {
        this.enableHandleClick();
        this.enableHandleKeyUp();
      }
    }
  }

  public componentWillUnmount(): void {
    this.stack.length = 0;
  }

  /**
   * Завершилась анимация скрытия модалки
   */
  private hideEnded = () => {
    this.hideTimer = 0;

    this.setState({
      hiddenElem: undefined,
    });
  };

  /**
   * Обработка событий клавиатуры
   */
  private fireKeyUp = () => {
    const modal = this.stack[this.stack.length - 1];

    if (modal && modal.modalMgrProps.onRequestClose) {
      modal.modalMgrProps.onRequestClose('escape');
    }
  };

  private handleMouseDown = (event: React.MouseEvent) => {
    this.mousePress = event.target === event.currentTarget;
  };

  private handleMouseUp = (event: React.MouseEvent) => {
    if (this.mousePress && event.target === event.currentTarget) {
      this.handleClick(event);
      this.mousePress = false;
    }
  };

  /**
   * Запрос на закрытие при клике снаружи модального окна
   */
  private handleClick = (event: React.MouseEvent) => {
    if (!this.enableHandleOutsideClick || event.target !== event.currentTarget) {
      return;
    }

    const modal = this.stack[this.stack.length - 1];

    if (modal.timeCreate + Mgr.CLICK_BLOCKING_AFTER_OPENING > Date.now()) {
      return;
    }

    const { onRequestClose } = modal.modalMgrProps;

    if (onRequestClose) {
      onRequestClose('outside');
    }
  };

  private disableHandleKeyUp() {
    if (this.props.keyboardMgr) {
      this.props.keyboardMgr.removeListener(this.fireKeyUp);
    }
  }

  private enableHandleKeyUp() {
    if (this.props.keyboardMgr) {
      this.props.keyboardMgr.addListener(this.fireKeyUp);
    }
  }

  /**
   * Выключаем реакцию на клики
   */
  private disableHandleClick() {
    this.enableHandleOutsideClick = false;
  }

  /**
   * Включаем реакцию на клики
   */
  private enableHandleClick() {
    this.enableHandleOutsideClick = true;
  }

  /**
   * Добавляем модальное окно
   */
  public add(elem: React.ReactNode, modalId: number, modalProps: ModalMgrProps) {
    const { stack } = this;
    const modal = stack.find(it => it.modalId === modalId);

    // Модалка добавлена ранее. Есть обновление
    if (modal) {
      modal.elem = elem;

      // Обновить стоит только если модалка вверху
      if (stack[stack.length - 1].modalId === modalId) {
        this.forceUpdate();
      }

      return;
    }

    // Добавляем новую модалку
    stack.push({
      elem,
      modalId,
      timeCreate: Date.now(),
      modalMgrProps: modalProps,
    });

    this.forceUpdate();
  }

  /**
   * Удаляет модальное окно из стека
   */
  public remove(id: number) {
    const { stack } = this;

    if (!stack.length) {
      return;
    }

    const ind = stack.findIndex(it => it.modalId === id);

    if (ind === -1) {
      return;
    }

    const modal = stack[ind];

    // Модальное окно перекрыто другим модальным окном
    // Анимацию скрытия не делаем, тихо убираем его из стека
    // TODO после изменения для сохранения всех модалок в react-дереве нужен rerender компонента
    if (modal !== stack[stack.length - 1]) {
      stack.splice(ind, 1);
      return;
    }

    // Модальное окно находится вверху стека

    // Анимация скрытия не требуется. Нужно заменить текущую открытую модалку
    // - Модальное окно было открыто менее Manager.MIN_TIME_OPENED
    // - Если анимация скрытия уже идет на другое окно
    if (modal.timeCreate + Mgr.MIN_TIME_OPENED > Date.now() || this.hideTimer) {
      stack.splice(ind, 1);
      this.forceUpdate();
      return;
    }

    // запуск анимации скрытия и удаление модалки из стека
    // TODO синхронизировать значения длительности анимации скрытия в css и js
    this.hideTimer = setTimeout(this.hideEnded, HIDING_DELAY);
    this.setState({
      hiddenElem: stack.pop(),
    });
  }

  public render() {
    const { stack } = this;
    const { hiddenElem } = this.state;

    if (!stack.length && !hiddenElem) {
      return null;
    }

    const empty = !stack.length;
    const modal = stack[stack.length - 1];

    // todo I сократить размер контейнера модального окна - что бы не занимало всю площадь экрана

    // todo II сделать вывод всех окон друг под другом

    return (
      <div className={css.mgr}>
        <div className={cn(css.bg, !empty && css.bgShow, empty && css.bgHide)} />

        {modal && (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            key={modal.modalId}
            className={cn(css.modal, css.center, css.show)}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          >
            {modal.elem}
          </div>
        )}

        {hiddenElem && (
          <div key={hiddenElem.modalId} className={cn(css.modal, css.center, css.hide)}>
            {hiddenElem.elem}
          </div>
        )}
      </div>
    );
  }
}

export function HocMgr() {
  const ref = React.useRef<Mgr>(null);
  const modalConfig = React.useContext(ModalConfigCtx);

  React.useEffect(() => {
    if (ref.current) {
      modalConfig.setMgr(ref.current);
    }
  }, []);

  // todo можно убрать `setMgr`
  return <Mgr ref={ref} {...modalConfig} />;
}
