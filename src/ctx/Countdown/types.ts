
export interface ICountdownProps {
  countdown: ICountdown;
}

export interface ICountdown {
  level: CountdownLevel;
}

export enum CountdownLevel {
  CORE = 0,
  CRITICAL = 1,
  IMPORTANT = 2,
  MINOR = 3,
  NOT_IMPORTANT = 4,
}
