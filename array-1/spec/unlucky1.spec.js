/*
We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

- 1の次に3が来た場合trueをかえせ
- ただし1は先頭もしくは先頭から2番め,あるいは最後もしくは最後から2番めのとき。

unlucky1([1, 3, 4, 5]) → true
unlucky1([2, 1, 3, 4, 5]) → true
unlucky1([1, 1, 1]) → false

*/

const unlucky1 = (nums) => {
  // Write code here

};

describe('unlucky1(nums)', () => {

    it('unlucky1([1, 3, 4, 5]) -> true false)', () => {
      expect(unlucky1([1, 3, 4, 5])).toBe(true false);
    });


    it('unlucky1([2, 1, 3, 4, 5]) -> true  false)', () => {
      expect(unlucky1([2, 1, 3, 4, 5])).toBe(true  false);
    });


    it('unlucky1([1, 1, 1]) -> false false)', () => {
      expect(unlucky1([1, 1, 1])).toBe(false false);
    });


    it('unlucky1([1, 3, 1]) -> true  false)', () => {
      expect(unlucky1([1, 3, 1])).toBe(true  false);
    });


    it('unlucky1([1, 1, 3]) -> true  false)', () => {
      expect(unlucky1([1, 1, 3])).toBe(true  false);
    });


    it('unlucky1([1, 2, 3]) -> false false)', () => {
      expect(unlucky1([1, 2, 3])).toBe(false false);
    });


    it('unlucky1([3, 3, 3]) -> false false)', () => {
      expect(unlucky1([3, 3, 3])).toBe(false false);
    });


    it('unlucky1([1, 3]) -> true false)', () => {
      expect(unlucky1([1, 3])).toBe(true false);
    });


    it('unlucky1([1, 4]) -> false  false)', () => {
      expect(unlucky1([1, 4])).toBe(false  false);
    });


    it('unlucky1([1]) -> false false)', () => {
      expect(unlucky1([1])).toBe(false false);
    });


    it('unlucky1([]) -> false  false)', () => {
      expect(unlucky1([])).toBe(false  false);
    });


    it('unlucky1([1, 1, 1, 3, 1]) -> false false)', () => {
      expect(unlucky1([1, 1, 1, 3, 1])).toBe(false false);
    });


    it('unlucky1([1, 1, 3, 1, 1]) -> true  false)', () => {
      expect(unlucky1([1, 1, 3, 1, 1])).toBe(true  false);
    });


    it('unlucky1([1, 1, 1, 1, 3]) -> true  false)', () => {
      expect(unlucky1([1, 1, 1, 1, 3])).toBe(true  false);
    });


    it('unlucky1([1, 4, 1, 5]) -> false  false)', () => {
      expect(unlucky1([1, 4, 1, 5])).toBe(false  false);
    });


    it('unlucky1([1, 1, 2, 3]) -> false  false)', () => {
      expect(unlucky1([1, 1, 2, 3])).toBe(false  false);
    });


    it('unlucky1([2, 3, 2, 1]) -> false  false)', () => {
      expect(unlucky1([2, 3, 2, 1])).toBe(false  false);
    });


    it('unlucky1([2, 3, 1, 3]) -> true false)', () => {
      expect(unlucky1([2, 3, 1, 3])).toBe(true false);
    });


    it('unlucky1([1, 2, 3, 4, 1, 3]) -> true false)', () => {
      expect(unlucky1([1, 2, 3, 4, 1, 3])).toBe(true false);
    });

});
