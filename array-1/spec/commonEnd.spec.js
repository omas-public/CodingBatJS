/*
Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

- 2つの整数配列 a,b が与えられる
  - aおよびbの最初の要素が同じであるときtrueを返せ
  - a,bの長さは1以上とする

commonEnd([1, 2, 3], [7, 3]) → true
commonEnd([1, 2, 3], [7, 3, 2]) → false
commonEnd([1, 2, 3], [1, 3]) → true

*/

const commonEnd = (a, b) => {
  // Write code here

};

describe('commonEnd(a, b)', () => {

    it('commonEnd([1, 2, 3], [7, 3]) -> true)', () => {
      expect(commonEnd([1, 2, 3], [7, 3])).toEqual(true);
    });


    it('commonEnd([1, 2, 3], [7, 3, 2]) -> false)', () => {
      expect(commonEnd([1, 2, 3], [7, 3, 2])).toEqual(false);
    });


    it('commonEnd([1, 2, 3], [1, 3]) -> true)', () => {
      expect(commonEnd([1, 2, 3], [1, 3])).toEqual(true);
    });


    it('commonEnd([1, 2, 3], [1]) -> true)', () => {
      expect(commonEnd([1, 2, 3], [1])).toEqual(true);
    });


    it('commonEnd([1, 2, 3], [2]) -> false)', () => {
      expect(commonEnd([1, 2, 3], [2])).toEqual(false);
    });

});
