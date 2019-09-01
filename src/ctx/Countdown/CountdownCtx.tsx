import React from 'react';
import { Countdown, CountdownLevel } from './types';

const countdown = {
  getLevel() {
    return CountdownLevel.CORE;
  },
  addTask() {
    return 0;
  },
  removeTask(): void {},
};

const CountdownCtx = React.createContext<Countdown>(countdown);

export default CountdownCtx;
