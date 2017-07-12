/*
Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.

- 奇数の長さを持つ配列 num が与えられる
  - 配列の最初の要素，最後の要素，中央の要素のうち一番大きい値を返せ

maxTriple([1, 2, 3]) → 3
maxTriple([1, 5, 3]) → 5
maxTriple([5, 2, 3]) → 5

*/

const maxTriple = (nums) => {
  // Write code here

};

describe('maxTriple(nums)', () => {

    it('maxTriple([1, 2, 3]) -> 3)', () => {
      expect(maxTriple([1, 2, 3])).toBe(3);
    });


    it('maxTriple([1, 5, 3]) -> 5)', () => {
      expect(maxTriple([1, 5, 3])).toBe(5);
    });


    it('maxTriple([5, 2, 3]) -> 5)', () => {
      expect(maxTriple([5, 2, 3])).toBe(5);
    });


    it('maxTriple([1, 2, 3, 1, 1]) -> 3)', () => {
      expect(maxTriple([1, 2, 3, 1, 1])).toBe(3);
    });


    it('maxTriple([1, 7, 3, 1, 5]) -> 5)', () => {
      expect(maxTriple([1, 7, 3, 1, 5])).toBe(5);
    });


    it('maxTriple([5, 1, 3, 7, 1]) -> 5)', () => {
      expect(maxTriple([5, 1, 3, 7, 1])).toBe(5);
    });


    it('maxTriple([5, 1, 7, 3, 7, 8, 1]) -> 5)', () => {
      expect(maxTriple([5, 1, 7, 3, 7, 8, 1])).toBe(5);
    });


    it('maxTriple([5, 1, 7, 9, 7, 8, 1]) -> 9)', () => {
      expect(maxTriple([5, 1, 7, 9, 7, 8, 1])).toBe(9);
    });


    it('maxTriple([5, 1, 7, 3, 7, 8, 9]) -> 9)', () => {
      expect(maxTriple([5, 1, 7, 3, 7, 8, 9])).toBe(9);
    });


    it('maxTriple([2, 2, 5, 1, 1]) -> 5)', () => {
      expect(maxTriple([2, 2, 5, 1, 1])).toBe(5);
    });

});
