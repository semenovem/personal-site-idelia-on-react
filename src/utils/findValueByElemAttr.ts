export default function (
  elem: HTMLElement | null,
  parent: HTMLElement | null,
  attr: string,
): string | undefined {

  while (elem && elem !== parent) {
    if (elem.hasAttribute(attr)) {
      return elem.getAttribute(attr)!;
    }
    elem = elem.parentElement;
  }
}
