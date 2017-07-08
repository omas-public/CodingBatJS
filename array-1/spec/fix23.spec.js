/*
Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.

fix23([1, 2, 3]) → [1, 2, 0]
fix23([2, 3, 5]) → [2, 0, 5]
fix23([1, 2, 1]) → [1, 2, 1]

*/

const fix23 = (nums) => {
  // Write code here

};

describe('fix23(nums)', () => {

    it('fix23([1, 2, 3]) -> [1, 2, 0])', () => {
      expect(fix23([1, 2, 3])).toEqual([1, 2, 0]);
    });


    it('fix23([2, 3, 5]) -> [2, 0, 5])', () => {
      expect(fix23([2, 3, 5])).toEqual([2, 0, 5]);
    });


    it('fix23([1, 2, 1]) -> [1, 2, 1])', () => {
      expect(fix23([1, 2, 1])).toEqual([1, 2, 1]);
    });


    it('fix23([3, 2, 1]) -> [3, 2, 1])', () => {
      expect(fix23([3, 2, 1])).toEqual([3, 2, 1]);
    });


    it('fix23([2, 2, 3]) -> [2, 2, 0])', () => {
      expect(fix23([2, 2, 3])).toEqual([2, 2, 0]);
    });


    it('fix23([2, 3, 3]) -> [2, 0, 3])', () => {
      expect(fix23([2, 3, 3])).toEqual([2, 0, 3]);
    });

});
