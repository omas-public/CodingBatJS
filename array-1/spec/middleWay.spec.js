/*
Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

middleWay([1, 2, 3], [4, 5, 6]) → [2, 5]
middleWay([7, 7, 7], [3, 8, 0]) → [7, 8]
middleWay([5, 2, 9], [1, 4, 5]) → [2, 4]

- 長さ3の配列 a, bが与えられる。
  - それぞれの配列の真ん中の要素を含んだ新しい配列を返せ
*/

const middleWay = (a, b) => {
  // Write code here

};

describe('middleWay(a, b)', () => {

  it('middleWay([1, 2, 3], [4, 5, 6]) -> [2, 5])', () => {
    expect(middleWay([1, 2, 3], [4, 5, 6])).toEqual([2, 5]);
  });


  it('middleWay([7, 7, 7], [3, 8, 0]) -> [7, 8])', () => {
    expect(middleWay([7, 7, 7], [3, 8, 0])).toEqual([7, 8]);
  });


  it('middleWay([5, 2, 9], [1, 4, 5]) -> [2, 4])', () => {
    expect(middleWay([5, 2, 9], [1, 4, 5])).toEqual([2, 4]);
  });


  it('middleWay([1, 9, 7], [4, 8, 8]) -> [9, 8])', () => {
    expect(middleWay([1, 9, 7], [4, 8, 8])).toEqual([9, 8]);
  });


  it('middleWay([1, 2, 3], [3, 1, 4]) -> [2, 1])', () => {
    expect(middleWay([1, 2, 3], [3, 1, 4])).toEqual([2, 1]);
  });


  it('middleWay([1, 2, 3], [4, 1, 1]) -> [2, 1])', () => {
    expect(middleWay([1, 2, 3], [4, 1, 1])).toEqual([2, 1]);
  });

});