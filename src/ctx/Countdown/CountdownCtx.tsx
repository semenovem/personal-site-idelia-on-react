import React from "react";
import {ICountdown, CountdownLevel} from "./types";

const countdown = {
    getLevel() { return CountdownLevel.CORE; },
    addTask(countdownLevel: CountdownLevel) { return 0 },
    removeTask(numTask: number): void {}
  };

const CountdownCtx = React.createContext<ICountdown>(countdown);

export default CountdownCtx;
