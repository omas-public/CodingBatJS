/*
Given an int array length 2, return true if it contains a 2 or a 3.

- 長さ2の配列numsが与えられる
  - nums が 2または3の要素を含むときtrueを返せ

has23([2, 5]) → true
has23([4, 3]) → true
has23([4, 5]) → false

*/

const has23 = (nums) => {
  // Write code here

};

describe('has23(nums)', () => {

    it('has23([2, 5]) -> true)', () => {
      expect(has23([2, 5])).toBe(true);
    });


    it('has23([4, 3]) -> true)', () => {
      expect(has23([4, 3])).toBe(true);
    });


    it('has23([4, 5]) -> false false)', () => {
      expect(has23([4, 5])).toBe(false false);
    });


    it('has23([2, 2]) -> true)', () => {
      expect(has23([2, 2])).toBe(true);
    });


    it('has23([3, 2]) -> true)', () => {
      expect(has23([3, 2])).toBe(true);
    });


    it('has23([3, 3]) -> true)', () => {
      expect(has23([3, 3])).toBe(true);
    });


    it('has23([7, 7]) -> false)', () => {
      expect(has23([7, 7])).toBe(false);
    });


    it('has23([3, 9]) -> true)', () => {
      expect(has23([3, 9])).toBe(true);
    });


    it('has23([9, 5]) -> false)', () => {
      expect(has23([9, 5])).toBe(false);
    });

});
