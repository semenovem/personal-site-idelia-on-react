/**
 * for not user browser, example server side or pre-rendering - not execute callbacks
 */
export function isUserBrowser() {
  return (
    typeof window === 'object'
    && window
    && typeof window.navigator === 'object'
    && window.navigator
    && window.navigator.userAgent !== 'ReactSnap'
  );
}
