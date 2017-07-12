/*
Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

- 長さ3の配列が与えられる
  - 最初と最後の要素のうち大きい値をすべての要素とする配列を返せ

maxEnd3([1, 2, 3]) → [3, 3, 3]
maxEnd3([11, 5, 9]) → [11, 11, 11]
maxEnd3([2, 11, 3]) → [3, 3, 3]

*/

const maxEnd3 = (nums) => {
  // Write code here

};

describe('maxEnd3(nums)', () => {

    it('maxEnd3([1, 2, 3]) -> [3, 3, 3])', () => {
      expect(maxEnd3([1, 2, 3])).toEqual([3, 3, 3]);
    });


    it('maxEnd3([11, 5, 9]) -> [11, 11, 11])', () => {
      expect(maxEnd3([11, 5, 9])).toEqual([11, 11, 11]);
    });


    it('maxEnd3([2, 11, 3]) -> [3, 3, 3])', () => {
      expect(maxEnd3([2, 11, 3])).toEqual([3, 3, 3]);
    });


    it('maxEnd3([11, 3, 3]) -> [11, 11, 11])', () => {
      expect(maxEnd3([11, 3, 3])).toEqual([11, 11, 11]);
    });


    it('maxEnd3([3, 11, 11]) -> [11, 11, 11])', () => {
      expect(maxEnd3([3, 11, 11])).toEqual([11, 11, 11]);
    });


    it('maxEnd3([2, 2, 2]) -> [2, 2, 2])', () => {
      expect(maxEnd3([2, 2, 2])).toEqual([2, 2, 2]);
    });


    it('maxEnd3([2, 11, 2]) -> [2, 2, 2])', () => {
      expect(maxEnd3([2, 11, 2])).toEqual([2, 2, 2]);
    });


    it('maxEnd3([0, 0, 1]) -> [1, 1, 1])', () => {
      expect(maxEnd3([0, 0, 1])).toEqual([1, 1, 1]);
    });

});
