/*
Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

double23([2, 2]) → true
double23([3, 3]) → true
double23([2, 3]) → false

- 整数の配列 nums が与えられる
  - nums の値に2が2回あるいは3が2回含まれる時,trueを返せ
  - numsの長さは0または1または2である
*/

const double23 = (nums) => {
  // Write code here

};

describe('double23(nums)', () => {

    it('double23([2, 2]) -> true)', () => {
      expect(double23([2, 2])).toBe(true);
    });


    it('double23([3, 3]) -> true)', () => {
      expect(double23([3, 3])).toBe(true);
    });


    it('double23([2, 3]) -> false)', () => {
      expect(double23([2, 3])).toBe(false);
    });


    it('double23([3, 2]) -> false)', () => {
      expect(double23([3, 2])).toBe(false);
    });


    it('double23([4, 5]) -> false)', () => {
      expect(double23([4, 5])).toBe(false);
    });


    it('double23([2]) -> false)', () => {
      expect(double23([2])).toBe(false);
    });


    it('double23([3]) -> false)', () => {
      expect(double23([3])).toBe(false);
    });


    it('double23([]) -> false)', () => {
      expect(double23([])).toBe(false);
    });


    it('double23([3, 4]) -> false)', () => {
      expect(double23([3, 4])).toBe(false);
    });

});
