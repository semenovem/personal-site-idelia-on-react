import Event from './Event';

const listenersKeyDown: Callback[] = [];
const listenersKeyUp: Callback[] = [];

export function addKeyDownListener(callback: Callback) {
  if (!listenersKeyDown.length) {
    document.addEventListener('keydown', onKeyDown, true);
  }

  listenersKeyDown.push(callback);
}

export function removeDownUpListener(callback: Callback) {
  listenersKeyDown.filter(it => it !== callback);

  if (!listenersKeyDown.length) {
    document.removeEventListener('keydown', onKeyDown);
  }
}

export function addKeyUpListener(callback: Callback) {
  if (!listenersKeyUp.length) {
    document.addEventListener('keyup', onKeyUp, true);
  }

  listenersKeyUp.push(callback);
}

export function removeKeyUpListener(callback: Callback) {
  listenersKeyUp.filter(it => it !== callback);

  if (!listenersKeyUp.length) {
    document.removeEventListener('keyup', onKeyUp);
  }
}

function onKeyDown(event: KeyboardEvent) {
  fireEvent(listenersKeyDown, event);
}

function onKeyUp(event: KeyboardEvent) {
  fireEvent(listenersKeyUp, event);
}

function fireEvent(listeners: Callback[], nativeEvent: KeyboardEvent) {
  const event = new Event(nativeEvent);

  listeners.some(it => {
    it(event);

    return event.isStoppedPropagation;
  });
}

type Callback = (event: Event) => void;
