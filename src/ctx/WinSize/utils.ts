import { WinSize } from './types';

export function defWinSize(w: number): WinSize {
  if (w < WinSize.SM) {
    return WinSize.XS;
  }
  if (w < WinSize.MD) {
    return WinSize.SM;
  }
  if (w < WinSize.LG) {
    return WinSize.MD;
  }
  if (w < WinSize.XL) {
    return WinSize.LG;
  }

  return WinSize.XL;
}

export function canBeUsed(target: WinSize, winSize: WinSize): boolean {
  return winSize <= target;
}

/**
 * relevant screen resolution
 */
export function howRelevant(target: WinSize, winSize: WinSize | null): number | null {
  if (winSize === null) {
    return null;
  }

  const d = target - winSize;
  return d < 0 ? null : d + winSize;
}

export function getSmaller(w: WinSize): WinSize | null {
  if (w === WinSize.XL) {
    return WinSize.LG;
  }
  if (w === WinSize.LG) {
    return WinSize.MD;
  }
  if (w === WinSize.MD) {
    return WinSize.SM;
  }
  if (w === WinSize.SM) {
    return WinSize.XS;
  }

  return null;
}

type Code = 'XS' | 'SM' | 'MD' | 'LG' | 'XL';

export function getCodeWinSize(w: WinSize): Code {
  if (w === WinSize.XS) {
    return 'XS';
  }
  if (w === WinSize.SM) {
    return 'SM';
  }
  if (w === WinSize.MD) {
    return 'MD';
  }
  if (w === WinSize.LG) {
    return 'LG';
  }

  return 'XL';
}
