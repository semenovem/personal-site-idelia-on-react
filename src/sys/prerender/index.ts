const name = 'ReactSnap';

/**
 * defines the pre-rendering process
 */
export function isPreRendering() {
  return window.navigator.userAgent === name;
}
