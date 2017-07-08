/*
Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

plusTwo([1, 2], [3, 4]) → [1, 2, 3, 4]
plusTwo([4, 4], [2, 2]) → [4, 4, 2, 2]
plusTwo([9, 2], [3, 4]) → [9, 2, 3, 4]

*/

const plusTwo = (a, b) => {
  // Write code here

};

describe('plusTwo(a, b)', () => {

    it('plusTwo([1, 2], [3, 4]) -> [1, 2, 3, 4])', () => {
      expect(plusTwo([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });


    it('plusTwo([4, 4], [2, 2]) -> [4, 4, 2, 2])', () => {
      expect(plusTwo([4, 4], [2, 2])).toEqual([4, 4, 2, 2]);
    });


    it('plusTwo([9, 2], [3, 4]) -> [9, 2, 3, 4])', () => {
      expect(plusTwo([9, 2], [3, 4])).toEqual([9, 2, 3, 4]);
    });

});
