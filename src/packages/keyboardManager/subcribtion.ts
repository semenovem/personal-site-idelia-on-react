import { Handler, HandlerListItem, Option } from './types';

let listeners: HandlerListItem[] = [];

export function addKeyListener(handler: Handler, opt?: Option): void {
  listeners.push({
    ...opt,
    handler,
  });

  if (listeners.length === 1) {
    window.addEventListener('keydown', handle);
    window.addEventListener('keyup', handle);
  }
}

export function removeKeyListener(handler: Handler): void {
  listeners = listeners.filter(it => it.handler !== handler);

  if (!listeners.length) {
    window.removeEventListener('keydown', handle);
    window.removeEventListener('keyup', handle);
  }
}

function handle(event: KeyboardEvent) {
  const item = listeners[listeners.length - 1];
  if (!item) {
    return;
  }

  if (item.eventName && item.eventName !== event.type) {
    return;
  }

  if (item.key && item.key !== event.keyCode) {
    return;
  }

  item.handler(event);
}
