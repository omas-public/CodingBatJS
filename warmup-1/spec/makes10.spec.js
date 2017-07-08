/*
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true

*/

const makes10 = (a, b) => {
  // Write code here

};
    
describe('makes10(a, b)', () => {

    it('makes10(9, 10) -> true)', () => {
      expect(makes10(9, 10)).toBe(true);
    });
    

    it('makes10(9, 9) -> false)', () => {
      expect(makes10(9, 9)).toBe(false);
    });
    

    it('makes10(1, 9) -> true)', () => {
      expect(makes10(1, 9)).toBe(true);
    });
    

    it('makes10(10, 1) -> true)', () => {
      expect(makes10(10, 1)).toBe(true);
    });
    

    it('makes10(10, 10) -> true)', () => {
      expect(makes10(10, 10)).toBe(true);
    });
    

    it('makes10(8, 2) -> true)', () => {
      expect(makes10(8, 2)).toBe(true);
    });
    

    it('makes10(8, 3) -> false)', () => {
      expect(makes10(8, 3)).toBe(false);
    });
    

    it('makes10(10, 42) -> true)', () => {
      expect(makes10(10, 42)).toBe(true);
    });
    

    it('makes10(12, -2) -> true)', () => {
      expect(makes10(12, -2)).toBe(true);
    });
    
});
