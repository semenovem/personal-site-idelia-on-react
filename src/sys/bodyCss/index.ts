/**
 * add css class to body
 */
export function addCssClassToBody(css: string | string[]) {
  if (Array.isArray(css)) {
    document.body.classList.add(...css);
  } else {
    document.body.classList.add(css);
  }
}

/**
 * remove body css class
 */
export function removeCssClassToBody(css: string | string[]) {
  if (Array.isArray(css)) {
    document.body.classList.remove(...css);
  } else {
    document.body.classList.remove(css);
  }
}
