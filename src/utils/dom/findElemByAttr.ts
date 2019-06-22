export function findElemByAttr (
  elem: HTMLElement | null,
  parent: HTMLElement | null,
  attr: string,
): HTMLElement | null {

  while (elem && elem !== parent) {
    if (elem.hasAttribute(attr)) {
      return elem;
    }
    elem = elem.parentElement;
  }

  return null;
}
