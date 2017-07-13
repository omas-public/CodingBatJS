/*
Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

- 整数の値を持つ配列 nums が与えられる
  - nums の最初の要素あるいは最後の要素が6の場合Trueを返せ
  - numの長さは1以上である

firstLast6([1, 2, 6])       → true
firstLast6([6, 1, 2, 3])    → true
firstLast6([13, 6, 1, 2, 3])→ false

*/

const firstLast6 = (nums) => {
  // Write code here

};

describe('firstLast6(nums)', () => {

    it('firstLast6([1, 2, 6]) -> true)', () => {
      expect(firstLast6([1, 2, 6])).toBe(true);
    });


    it('firstLast6([6, 1, 2, 3]) -> true)', () => {
      expect(firstLast6([6, 1, 2, 3])).toBe(true);
    });


    it('firstLast6([13, 6, 1, 2, 3]) -> false)', () => {
      expect(firstLast6([13, 6, 1, 2, 3])).toBe(false);
    });


    it('firstLast6([13, 6, 1, 2, 6]) -> true)', () => {
      expect(firstLast6([13, 6, 1, 2, 6])).toBe(true);
    });


    it('firstLast6([3, 2, 1]) -> false)', () => {
      expect(firstLast6([3, 2, 1])).toBe(false);
    });


    it('firstLast6([3, 6, 1]) -> false)', () => {
      expect(firstLast6([3, 6, 1])).toBe(false);
    });


    it('firstLast6([3, 6]) -> true)', () => {
      expect(firstLast6([3, 6])).toBe(true);
    });


    it('firstLast6([6]) -> true)', () => {
      expect(firstLast6([6])).toBe(true);
    });


    it('firstLast6([3]) -> false)', () => {
      expect(firstLast6([3])).toBe(false);
    });


    it('firstLast6([5, 6]) -> true)', () => {
      expect(firstLast6([5, 6])).toBe(true);
    });


    it('firstLast6([5, 5]) -> false)', () => {
      expect(firstLast6([5, 5])).toBe(false);
    });


    it('firstLast6([1, 2, 3, 4, 6]) -> true)', () => {
      expect(firstLast6([1, 2, 3, 4, 6])).toBe(true);
    });


    it('firstLast6([1, 2, 3, 4]) -> false)', () => {
      expect(firstLast6([1, 2, 3, 4])).toBe(false);
    });

});
