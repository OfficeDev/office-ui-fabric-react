/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 */
export function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x);
}