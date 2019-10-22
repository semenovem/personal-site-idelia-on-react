const name = 'ReactSnap';

/**
 * defines the pre-rendering process
 */
export function hasPreRendering() {
  return window.navigator.userAgent === name;
}
