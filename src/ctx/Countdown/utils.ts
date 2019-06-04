import {CountdownLevel} from "./types";

/**
 * relevant level
 */
export function howRelevant(target: CountdownLevel, countdownLevel: CountdownLevel | null): number | null {
  if (countdownLevel === null) {
    return null;
  }

  const d = target - countdownLevel;
  return d < 0 ? null : d;
}
