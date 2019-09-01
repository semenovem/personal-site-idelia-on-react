/**
 * Вариант для контекста.
 * Без создания дополнительного объекта / вложенности
 *
 * work in progress
 */
import { defWinSize } from './utils';
import { WinSize } from './types';

type Callback = (winn: WinSize) => void;

const DELAY = 100;
/**
 * for execute only one time
 */
let isInit = false;

let listeners: Callback[] = [];
let timer = 0;

let winSize = defWinSize(window.innerWidth);

/**
 * @public
 */
export function addListener(callback: Callback) {
  listeners.push(callback);
  if (listeners.length === 1) {
    init();
  }
}

/**
 * @public
 */
export function removeListener(callback: Callback) {
  listeners = listeners.filter(it => it !== callback);
  if (listeners.length === 0) {
    uninit();
  }
}

/**
 * @public
 */
export function getState() {
  return (winSize = defWinSize(window.innerWidth));
}

/**
 * for ever change size w=of window
 */
function eventResize() {
  clearTimeout(timer);
  timer = window.setTimeout(fireEvent, DELAY);
}

/**
 * Trigger event about resize
 * notify subscribers
 */
function fireEvent() {
  winSize = defWinSize(window.innerWidth);
  listeners.forEach(callback => callback(winSize));
}

function init() {
  if (isInit) {
    return;
  }
  isInit = true;
  window.addEventListener('resize', eventResize);
}

function uninit() {
  isInit = false;
  window.addEventListener('resize', eventResize);
}

/*

example

interface State {
  winSize: WinSize;
}

class AppApplyCtx extends React.Component<void, State> {

  public constructor() {
    super({});
    winSize.addListener(this.handleWinSize);

    // another subscribers
  }


  private handleWinSize = (winSize: WinSize) => {
    this.setState({
      winSize,
    });
  }

  // functions handlers

  public render() {
    const state = this.state;

    return (
      <WinSizeProvider value={state.winSize}>
        // Providers

      </WinSizeProvider>
    );
  }
}

 */
