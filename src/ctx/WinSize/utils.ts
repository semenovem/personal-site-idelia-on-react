import { WinSize } from "./types";

export function defWinSize(w: number): WinSize {
  if (w < WinSize.SM) { return WinSize.XS; }
  if (w < WinSize.MD) { return WinSize.SM; }
  if (w < WinSize.LG) { return WinSize.MD; }
  if (w < WinSize.XL) { return WinSize.LG; }
  if (w < WinSize.XXL) { return WinSize.XL; }

  return WinSize.XXL;
}

/**
 * Find relevant screen resolution
 */
export function defRelevant(target: WinSize, one: WinSize, two: WinSize): WinSize | null {
  const t = Math.max(target - one, target - two);

  return t < 0 ? null : t + target;
}
