/*
Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

- 配列の最初と最後の要素を交換せよ
- 配列の長さは1以上とする。

swapEnds([1, 2, 3, 4]) → [4, 2, 3, 1]
swapEnds([1, 2, 3]) → [3, 2, 1]
swapEnds([8, 6, 7, 9, 5]) → [5, 6, 7, 9, 8]

*/

const swapEnds = (nums) => {
  // Write code here

};

describe('swapEnds(nums)', () => {

    it('swapEnds([1, 2, 3, 4]) -> [4, 2, 3, 1])', () => {
      expect(swapEnds([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
    });


    it('swapEnds([1, 2, 3]) -> [3, 2, 1])', () => {
      expect(swapEnds([1, 2, 3])).toEqual([3, 2, 1]);
    });


    it('swapEnds([8, 6, 7, 9, 5]) -> [5, 6, 7, 9, 8])', () => {
      expect(swapEnds([8, 6, 7, 9, 5])).toEqual([5, 6, 7, 9, 8]);
    });


    it('swapEnds([3, 1, 4, 1, 5, 9]) -> [9, 1, 4, 1, 5, 3])', () => {
      expect(swapEnds([3, 1, 4, 1, 5, 9])).toEqual([9, 1, 4, 1, 5, 3]);
    });


    it('swapEnds([1, 2]) -> [2, 1])', () => {
      expect(swapEnds([1, 2])).toEqual([2, 1]);
    });


    it('swapEnds([1]) -> [1])', () => {
      expect(swapEnds([1])).toEqual([1]);
    });

});
