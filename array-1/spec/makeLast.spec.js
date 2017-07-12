/*
Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more. Note: by default, a new int array contains all 0's.

- 整数の配列numが与えられる
  - 末尾の要素が同じかつ配列長が2倍の配列を返せ
  - numの長さは1以上とする

makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
makeLast([1, 2]) → [0, 0, 0, 2]
makeLast([3]) → [0, 3]

*/

const makeLast = (nums) => {
  // Write code here

};

describe('makeLast(nums)', () => {

    it('makeLast([4, 5, 6]) -> [0, 0, 0, 0, 0, 6])', () => {
      expect(makeLast([4, 5, 6])).toEqual([0, 0, 0, 0, 0, 6]);
    });


    it('makeLast([1, 2]) -> [0, 0, 0, 2])', () => {
      expect(makeLast([1, 2])).toEqual([0, 0, 0, 2]);
    });


    it('makeLast([3]) -> [0, 3])', () => {
      expect(makeLast([3])).toEqual([0, 3]);
    });


    it('makeLast([0]) -> [0, 0])', () => {
      expect(makeLast([0])).toEqual([0, 0]);
    });


    it('makeLast([7, 7, 7]) -> [0, 0, 0, 0, 0, 7])', () => {
      expect(makeLast([7, 7, 7])).toEqual([0, 0, 0, 0, 0, 7]);
    });


    it('makeLast([3, 1, 4]) -> [0, 0, 0, 0, 0, 4])', () => {
      expect(makeLast([3, 1, 4])).toEqual([0, 0, 0, 0, 0, 4]);
    });


    it('makeLast([1, 2, 3, 4]) -> [0, 0, 0, 0, 0, 0, 0, 4])', () => {
      expect(makeLast([1, 2, 3, 4])).toEqual([0, 0, 0, 0, 0, 0, 0, 4]);
    });


    it('makeLast([1, 2, 3, 0]) -> [0, 0, 0, 0, 0, 0, 0, 0])', () => {
      expect(makeLast([1, 2, 3, 0])).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
    });


    it('makeLast([2, 4]) -> [0, 0, 0, 4])', () => {
      expect(makeLast([2, 4])).toEqual([0, 0, 0, 4]);
    });

});
