/*
Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.

lastDigit(7, 17) → true
lastDigit(6, 17) → false
lastDigit(3, 113) → true

*/

const lastDigit = (a, b) => {
  // Write code here

};
    
describe('lastDigit(a, b)', () => {

    it('lastDigit(7, 17) -> true)', () => {
      expect(lastDigit(7, 17)).toBe(true);
    });
    

    it('lastDigit(6, 17) -> false)', () => {
      expect(lastDigit(6, 17)).toBe(false);
    });
    

    it('lastDigit(3, 113) -> true)', () => {
      expect(lastDigit(3, 113)).toBe(true);
    });
    

    it('lastDigit(114, 113) -> false)', () => {
      expect(lastDigit(114, 113)).toBe(false);
    });
    

    it('lastDigit(114, 4) -> true)', () => {
      expect(lastDigit(114, 4)).toBe(true);
    });
    

    it('lastDigit(10, 0) -> true)', () => {
      expect(lastDigit(10, 0)).toBe(true);
    });
    

    it('lastDigit(11, 0) -> false)', () => {
      expect(lastDigit(11, 0)).toBe(false);
    });
    
});
