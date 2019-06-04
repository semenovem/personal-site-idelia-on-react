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
 * relevant screen resolution
 */
export function howRelevant(target: WinSize, winSize: WinSize | null): number | null {
  if (winSize === null) {
    return null;
  }

  const d = target - winSize;
  return d < 0 ? null : d;
}
