/*
Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.

- 奇数の長さを持つ配列numが与えられる
  - num 真ん中の3つの要素を含む配列を返せ


midThree([1, 2, 3, 4, 5]) → [2, 3, 4]
midThree([8, 6, 7, 5, 3, 0, 9]) → [7, 5, 3]
midThree([1, 2, 3]) → [1, 2, 3]


*/

const midThree = (nums) => {
  // Write code here

};

describe('midThree(nums)', () => {

    it('midThree([1, 2, 3, 4, 5]) -> [2, 3, 4])', () => {
      expect(midThree([1, 2, 3, 4, 5])).toEqual([2, 3, 4]);
    });


    it('midThree([8, 6, 7, 5, 3, 0, 9]) -> [7, 5, 3])', () => {
      expect(midThree([8, 6, 7, 5, 3, 0, 9])).toEqual([7, 5, 3]);
    });


    it('midThree([1, 2, 3]) -> [1, 2, 3])', () => {
      expect(midThree([1, 2, 3])).toEqual([1, 2, 3]);
    });

});
