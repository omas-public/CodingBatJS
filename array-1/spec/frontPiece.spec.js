/*
Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present.

- 任意の長さをもつ配列 nums が与えられる。
  - nums の最初の2つの要素を持つ配列を返せ
    - ただし numsの長さが2以下の場合はそのまま返せ

frontPiece([1, 2, 3]) → [1, 2]
frontPiece([1, 2]) → [1, 2]
frontPiece([1]) → [1]

*/

const frontPiece = (nums) => {
  // Write code here

};

describe('frontPiece(nums)', () => {

    it('frontPiece([1, 2, 3]) -> [1, 2])', () => {
      expect(frontPiece([1, 2, 3])).toEqual([1, 2]);
    });


    it('frontPiece([1, 2]) -> [1, 2])', () => {
      expect(frontPiece([1, 2])).toEqual([1, 2]);
    });


    it('frontPiece([1]) -> [1])', () => {
      expect(frontPiece([1])).toEqual([1]);
    });


    it('frontPiece([]) -> [])', () => {
      expect(frontPiece([])).toEqual([]);
    });


    it('frontPiece([6, 5, 0]) -> [6, 5])', () => {
      expect(frontPiece([6, 5, 0])).toEqual([6, 5]);
    });


    it('frontPiece([6, 5]) -> [6, 5])', () => {
      expect(frontPiece([6, 5])).toEqual([6, 5]);
    });


    it('frontPiece([3, 1, 4, 1, 5]) -> [3, 1])', () => {
      expect(frontPiece([3, 1, 4, 1, 5])).toEqual([3, 1]);
    });


    it('frontPiece([6]) -> [6])', () => {
      expect(frontPiece([6])).toEqual([6]);
    });

});
