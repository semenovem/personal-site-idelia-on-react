/**
 * Define size of scroll
 */
export function defScrollSze(): { x: number; y: number } {
  try {
    const elem = document.createElement('div');
    const s = elem.style;

    s.width = '100px';
    s.height = '100px';

    s.position = 'fixed';
    s.overflow = 'scroll';
    s.visibility = 'hidden';
    s.bottom = '-300px';
    s.left = '0';

    elem.innerHTML = `<div style="width:200px; height:200px;"></div>`;
    document.body.appendChild(elem);

    const x = elem.offsetWidth - elem.clientWidth;
    const y = elem.offsetHeight - elem.clientHeight;

    document.removeChild(elem);

    return {
      x: x < 0 ? 0 : x,
      y: y < 0 ? 0 : y,
    };
  } catch (_e) {
    return {
      x: 0,
      y: 0,
    };
  }
}
