/*
Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.

- 偶数の長さをもつ配列numが与えられる
  - num の 中央の2つの要素をもつ配列を返せ

makeMiddle([1, 2, 3, 4]) → [2, 3]
makeMiddle([7, 1, 2, 3, 4, 9]) → [2, 3]
makeMiddle([1, 2]) → [1, 2]

*/

const makeMiddle = (nums) => {
  // Write code here

};

describe('makeMiddle(nums)', () => {

    it('makeMiddle([1, 2, 3, 4]) -> [2, 3])', () => {
      expect(makeMiddle([1, 2, 3, 4])).toEqual([2, 3]);
    });


    it('makeMiddle([7, 1, 2, 3, 4, 9]) -> [2, 3])', () => {
      expect(makeMiddle([7, 1, 2, 3, 4, 9])).toEqual([2, 3]);
    });


    it('makeMiddle([1, 2]) -> [1, 2])', () => {
      expect(makeMiddle([1, 2])).toEqual([1, 2]);
    });


    it('makeMiddle([5, 2, 4, 7]) -> [2, 4])', () => {
      expect(makeMiddle([5, 2, 4, 7])).toEqual([2, 4]);
    });


    it('makeMiddle([9, 0, 4, 3, 9, 1]) -> [4, 3])', () => {
      expect(makeMiddle([9, 0, 4, 3, 9, 1])).toEqual([4, 3]);
    });

});
