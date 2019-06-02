/**
 * Размеры экранов
 * минимальные точки для переключения
 *
 * @example 0 >= XS < 567
 * @example 567 >= SM < 768
 */
enum WinSize {
  XS = 0,
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
  XXL = 1400,
}

export default WinSize;

export function defWinSize(w: number): WinSize {
  if (w < WinSize.SM) { return WinSize.XS; }
  if (w < WinSize.MD) { return WinSize.SM; }
  if (w < WinSize.LG) { return WinSize.MD; }
  if (w < WinSize.XL) { return WinSize.LG; }
  if (w < WinSize.XXL) { return WinSize.XL; }

  return WinSize.XXL;
}
