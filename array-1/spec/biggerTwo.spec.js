/*
Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

- 長さ2の配列a,bが与えられる。
  - それぞれの配列の要素の合計を計算し大きいほうの配列を返せ
  - 合計が同じ場合はaを返せ

biggerTwo([1, 2], [3, 4]) → [3, 4]
biggerTwo([3, 4], [1, 2]) → [3, 4]
biggerTwo([1, 1], [1, 2]) → [1, 2]

*/

const biggerTwo = (a, b) => {
  // Write code here

};

describe('biggerTwo(a, b)', () => {

    it('biggerTwo([1, 2], [3, 4]) -> [3, 4])', () => {
      expect(biggerTwo([1, 2], [3, 4])).toEqual([3, 4]);
    });


    it('biggerTwo([3, 4], [1, 2]) -> [3, 4])', () => {
      expect(biggerTwo([3, 4], [1, 2])).toEqual([3, 4]);
    });


    it('biggerTwo([1, 1], [1, 2]) -> [1, 2])', () => {
      expect(biggerTwo([1, 1], [1, 2])).toEqual([1, 2]);
    });


    it('biggerTwo([2, 1], [1, 1]) -> [2, 1])', () => {
      expect(biggerTwo([2, 1], [1, 1])).toEqual([2, 1]);
    });


    it('biggerTwo([2, 2], [1, 3]) -> [2, 2])', () => {
      expect(biggerTwo([2, 2], [1, 3])).toEqual([2, 2]);
    });


    it('biggerTwo([1, 3], [2, 2]) -> [1, 3])', () => {
      expect(biggerTwo([1, 3], [2, 2])).toEqual([1, 3]);
    });


    it('biggerTwo([6, 7], [3, 1]) -> [6, 7])', () => {
      expect(biggerTwo([6, 7], [3, 1])).toEqual([6, 7]);
    });

});
