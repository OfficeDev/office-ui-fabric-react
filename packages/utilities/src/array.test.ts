import { findIndex, createArray } from './array';
let { expect } = chai;

describe('array utils tests', () => {
  describe('findIndex tests', () => {
    it('returns -1 when there is no match in the array', () => {
      const array = [0, 1, 2];
      const index = findIndex(array, _ => false);

      expect(index).equals(-1);
    });

    it('should return the correct index when the predicate satisfies the condition', () => {
      const array = [0, 1, 2];
      const index = findIndex(array, elem => elem === 1);

      expect(index).equals(1);
    });

    it('should return the first index when repeated elements satisfy the predicate', () => {
      const array = [0, 1, 2, 2];
      const index = findIndex(array, elem => elem === 2);

      expect(index).equals(2);
    });
  });

  describe('createArray tests', () => {
    it('creates an array while invoking the callback', () => {
      let result = createArray(4, (index: number) => String.fromCharCode('a'.charCodeAt(0) + index));

      expect(result).to.deep.equal(['a', 'b', 'c', 'd']);
    });
  });
});