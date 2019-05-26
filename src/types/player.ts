
export enum Actions {
  PLAY,
  PAUSE,
  NEXT,
  PREV,
  CHANGE,
}

export enum Status {
  PLAY,
  PAUSE,
}

export enum Volume {
  UP,
  DOWN,
  MUTE,
  UNMUTE,
}

export interface IPlayer {
  status: Status
  play(): void;
  pause(): void;
  change(url: string | string[] | null): void;
}

export interface IMusicPlayer extends IPlayer {
  url: string | null;
}
