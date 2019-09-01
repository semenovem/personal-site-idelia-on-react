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

export interface Player {
  status: Status;
  play(): void;
  pause(): void;
  change(url: string | string[] | null): void;
  isPlay: boolean;
}

export interface MusicPlayer extends Player {
  url: string | null;
}
