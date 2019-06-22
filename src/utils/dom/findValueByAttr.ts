export function findValueByAttr (
  elem: HTMLElement | null,
  parent: HTMLElement | null,
  attr: string,
): string | null {

  while (elem && elem !== parent) {
    if (elem.hasAttribute(attr)) {
      return elem.getAttribute(attr);
    }
    elem = elem.parentElement;
  }

  return null;
}
