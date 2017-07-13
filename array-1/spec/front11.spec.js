/*
Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.

- 任意の長さをもつ配列 a,b が与えられる。
  - a, b のそれぞれの最初の要素を含む配列を返せ
    - いずれかの配列長が0の場合はその配列を無視せよ

front11([1, 2, 3], [7, 9, 8]) → [1, 7]
front11([1], [2]) → [1, 2]
front11([1, 7], []) → [1]

*/

const front11 = (a, b) => {
  // Write code here

};

describe('front11(a, b)', () => {

    it('front11([1, 2, 3], [7, 9, 8]) -> [1, 7])', () => {
      expect(front11([1, 2, 3], [7, 9, 8])).toEqual([1, 7]);
    });


    it('front11([1], [2]) -> [1, 2])', () => {
      expect(front11([1], [2])).toEqual([1, 2]);
    });


    it('front11([1, 7], []) -> [1])', () => {
      expect(front11([1, 7], [])).toEqual([1]);
    });


    it('front11([], [2, 8]) -> [2])', () => {
      expect(front11([], [2, 8])).toEqual([2]);
    });


    it('front11([], []) -> [])', () => {
      expect(front11([], [])).toEqual([]);
    });


    it('front11([3], [1, 4, 1, 9]) -> [3, 1])', () => {
      expect(front11([3], [1, 4, 1, 9])).toEqual([3, 1]);
    });


    it('front11([1, 4, 1, 9], []) -> [1])', () => {
      expect(front11([1, 4, 1, 9], [])).toEqual([1]);
    });

});
