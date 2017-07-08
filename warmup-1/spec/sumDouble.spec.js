/*
Given two int values, return their sum. Unless the two values are the same, then return double their sum.

sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8

*/

const sumDouble = (a, b) => {
  // Write code here

};
    
describe('sumDouble(a, b)', () => {

    it('sumDouble(1, 2) -> 3)', () => {
      expect(sumDouble(1, 2)).toBe(3);
    });
    

    it('sumDouble(3, 2) -> 5)', () => {
      expect(sumDouble(3, 2)).toBe(5);
    });
    

    it('sumDouble(2, 2) -> 8)', () => {
      expect(sumDouble(2, 2)).toBe(8);
    });
    

    it('sumDouble(-1, 0) -> -1)', () => {
      expect(sumDouble(-1, 0)).toBe(-1);
    });
    

    it('sumDouble(3, 3) -> 12)', () => {
      expect(sumDouble(3, 3)).toBe(12);
    });
    

    it('sumDouble(0, 0) -> 0)', () => {
      expect(sumDouble(0, 0)).toBe(0);
    });
    

    it('sumDouble(0, 1) -> 1)', () => {
      expect(sumDouble(0, 1)).toBe(1);
    });
    

    it('sumDouble(3, 4) -> 7)', () => {
      expect(sumDouble(3, 4)).toBe(7);
    });
    
});
