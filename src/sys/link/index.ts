/**
 * added link to head
 */
export function download(href: string, id: string): Promise<void> | never {
  // eslint-disable-next-line consistent-return
  return new Promise((resolve, reject) => {
    const elem = document.createElement('link');

    elem.href = href;
    elem.rel = 'stylesheet';
    elem.id = id;

    const elemHead = document.getElementsByTagName('head')[0];

    if (!elemHead) {
      return Promise.reject();
    }

    elem.onload = () => setTimeout(resolve, 1000);
    elem.onerror = () => reject();

    setTimeout(() => {
      elemHead.appendChild(elem);
    }, 1000);

    setTimeout(reject, 3000);
  });
}
