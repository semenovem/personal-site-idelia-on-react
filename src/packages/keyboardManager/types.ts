export type EventName = 'keydown' | 'keyup';

export type Handler = (event: KeyboardEvent) => void;

export interface Option {
  key?: Key;
  keys?: Key[];
  eventName?: EventName;
}

export interface HandlerListItem extends Option {
  handler: Handler;
}

/**
 * Основные коды кнопок
 */
export enum Key {
  ESCAPE = 27,
  ENTER = 13,
  BACKSPACE = 8,

  // etc
}
