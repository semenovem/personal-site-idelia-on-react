export interface CountdownProps {
  countdown: Countdown;
}

export interface Countdown {
  /**
   * get current level of countdown
   */
  getLevel(): CountdownLevel;

  /**
   * add task at level
   * return value of promise don't matter
   */
  addTask(countdownLevel: CountdownLevel, callback: (currentLevel: CountdownLevel) => void): number;

  /**
   * remove task, if component or anything did unmount
   */
  removeTask(numTask: number): void;
}

export enum CountdownLevel {
  CORE,
  CRITICAL,
  IMPORTANT,
  MINOR,
  NOT_IMPORTANT,
  FINALLY,
}
