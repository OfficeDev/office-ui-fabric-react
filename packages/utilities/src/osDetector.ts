let isMacResult: boolean;

/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset Reset the cached result value (mainly for testing).
 */
export function isMac(reset?: boolean): boolean {
  if (typeof isMacResult === 'undefined' || reset) {
    const userAgent = window && window.navigator && window.navigator.userAgent;
    isMacResult = !!userAgent && userAgent.indexOf('Macintosh') !== -1;
  }
  return isMacResult;
}
