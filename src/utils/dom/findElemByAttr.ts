export function findElemByAttr(
  elem: HTMLElement | null,
  parent: HTMLElement | null,
  attr: string
): HTMLElement | null {
  let el = elem;

  while (el && el !== parent) {
    if (el.hasAttribute(attr)) {
      return el;
    }
    el = el.parentElement;
  }

  return null;
}
