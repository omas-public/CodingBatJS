/*
Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

makeEnds([1, 2, 3]) → [1, 3]
makeEnds([1, 2, 3, 4]) → [1, 4]
makeEnds([7, 4, 6, 2]) → [7, 2]

- 整数の配列 num が与えられる。
  - numの最初の要素と最後の要素を含む配列を返す
  - numの配列の長さは1以上とする

*/

const makeEnds = (nums) => {
  // Write code here

};

describe('makeEnds(nums)', () => {

    it('makeEnds([1, 2, 3]) -> [1, 3])', () => {
      expect(makeEnds([1, 2, 3])).toEqual([1, 3]);
    });


    it('makeEnds([1, 2, 3, 4]) -> [1, 4])', () => {
      expect(makeEnds([1, 2, 3, 4])).toEqual([1, 4]);
    });


    it('makeEnds([7, 4, 6, 2]) -> [7, 2])', () => {
      expect(makeEnds([7, 4, 6, 2])).toEqual([7, 2]);
    });


    it('makeEnds([1, 2, 2, 2, 2, 2, 2, 3]) -> [1, 3])', () => {
      expect(makeEnds([1, 2, 2, 2, 2, 2, 2, 3])).toEqual([1, 3]);
    });


    it('makeEnds([7, 4]) -> [7, 4])', () => {
      expect(makeEnds([7, 4])).toEqual([7, 4]);
    });


    it('makeEnds([7]) -> [7, 7])', () => {
      expect(makeEnds([7])).toEqual([7, 7]);
    });


    it('makeEnds([5, 2, 9]) -> [5, 9])', () => {
      expect(makeEnds([5, 2, 9])).toEqual([5, 9]);
    });


    it('makeEnds([2, 3, 4, 1]) -> [2, 1])', () => {
      expect(makeEnds([2, 3, 4, 1])).toEqual([2, 1]);
    });

});
