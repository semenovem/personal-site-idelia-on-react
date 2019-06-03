import {CountdownLevel} from "./types";

/**
 * Find relevant level
 */
export function defRelevant(target: CountdownLevel, one: CountdownLevel, two: CountdownLevel): CountdownLevel | null {
  const t = Math.max(target - one, target - two);

  return t < 0 ? null : t + target;
}
