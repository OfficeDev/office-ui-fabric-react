/** Returns a single random entry from an array. */
// tslint:disable-next-line no-any
export function randomEntry(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
