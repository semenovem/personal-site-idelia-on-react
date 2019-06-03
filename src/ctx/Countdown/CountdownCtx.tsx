import React from "react";
import {ICountdown, CountdownLevel} from "./types";

const countdown = {
  level: CountdownLevel.CORE,
};

const CountdownCtx = React.createContext<ICountdown>(countdown);

export default CountdownCtx;
