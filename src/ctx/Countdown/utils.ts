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

export function getNext(level: CountdownLevel): CountdownLevel | null {
  switch (level) {
    case CountdownLevel.CORE:
      return CountdownLevel.CRITICAL;
    case CountdownLevel.CRITICAL:
      return CountdownLevel.IMPORTANT;
    case CountdownLevel.IMPORTANT:
      return CountdownLevel.MINOR;
    case CountdownLevel.MINOR:
      return CountdownLevel.NOT_IMPORTANT;
    case CountdownLevel.NOT_IMPORTANT:
      return CountdownLevel.FINALLY;

    default:
      return null;
  }
}
