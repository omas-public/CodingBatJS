/*
Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.

make2([4, 5], [1, 2, 3]) → [4, 5]
make2([4], [1, 2, 3]) → [4, 1]
make2([], [1, 2]) → [1, 2]

*/

const make2 = (a, b) => {
  // Write code here

};

describe('make2(a, b)', () => {

    it('make2([4, 5], [1, 2, 3]) -> [4, 5])', () => {
      expect(make2([4, 5], [1, 2, 3])).toEqual([4, 5]);
    });


    it('make2([4], [1, 2, 3]) -> [4, 1])', () => {
      expect(make2([4], [1, 2, 3])).toEqual([4, 1]);
    });


    it('make2([], [1, 2]) -> [1, 2])', () => {
      expect(make2([], [1, 2])).toEqual([1, 2]);
    });


    it('make2([1, 2], []) -> [1, 2])', () => {
      expect(make2([1, 2], [])).toEqual([1, 2]);
    });


    it('make2([3], [1, 2, 3]) -> [3, 1])', () => {
      expect(make2([3], [1, 2, 3])).toEqual([3, 1]);
    });


    it('make2([3], [1]) -> [3, 1])', () => {
      expect(make2([3], [1])).toEqual([3, 1]);
    });


    it('make2([3, 1, 4], []) -> [3, 1])', () => {
      expect(make2([3, 1, 4], [])).toEqual([3, 1]);
    });


    it('make2([1], [1]) -> [1, 1])', () => {
      expect(make2([1], [1])).toEqual([1, 1]);
    });


    it('make2([1, 2, 3], [7, 8]) -> [1, 2])', () => {
      expect(make2([1, 2, 3], [7, 8])).toEqual([1, 2]);
    });


    it('make2([7, 8], [1, 2, 3]) -> [7, 8])', () => {
      expect(make2([7, 8], [1, 2, 3])).toEqual([7, 8]);
    });


    it('make2([7], [1, 2, 3]) -> [7, 1])', () => {
      expect(make2([7], [1, 2, 3])).toEqual([7, 1]);
    });


    it('make2([5, 4], [2, 3, 7]) -> [5, 4])', () => {
      expect(make2([5, 4], [2, 3, 7])).toEqual([5, 4]);
    });

});
