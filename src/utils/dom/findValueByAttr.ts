export function findValueByAttr(
  elem: HTMLElement | null,
  parent: HTMLElement | null,
  attr: string
): string | null {
  let el = elem;

  while (el && el !== parent) {
    if (el.hasAttribute(attr)) {
      return el.getAttribute(attr);
    }
    el = el.parentElement;
  }

  return null;
}
