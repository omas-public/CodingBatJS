/*
We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false

*/

const loneTeen = (a, b) => {
  // Write code here

};
    
describe('loneTeen(a, b)', () => {

    it('loneTeen(13, 99) -> true)', () => {
      expect(loneTeen(13, 99)).toBe(true);
    });
    

    it('loneTeen(21, 19) -> true)', () => {
      expect(loneTeen(21, 19)).toBe(true);
    });
    

    it('loneTeen(13, 13) -> false)', () => {
      expect(loneTeen(13, 13)).toBe(false);
    });
    

    it('loneTeen(14, 20) -> true)', () => {
      expect(loneTeen(14, 20)).toBe(true);
    });
    

    it('loneTeen(20, 15) -> true)', () => {
      expect(loneTeen(20, 15)).toBe(true);
    });
    

    it('loneTeen(16, 17) -> false)', () => {
      expect(loneTeen(16, 17)).toBe(false);
    });
    

    it('loneTeen(16, 9) -> true)', () => {
      expect(loneTeen(16, 9)).toBe(true);
    });
    

    it('loneTeen(16, 18) -> false)', () => {
      expect(loneTeen(16, 18)).toBe(false);
    });
    

    it('loneTeen(13, 19) -> false)', () => {
      expect(loneTeen(13, 19)).toBe(false);
    });
    

    it('loneTeen(13, 20) -> true)', () => {
      expect(loneTeen(13, 20)).toBe(true);
    });
    

    it('loneTeen(6, 18) -> true)', () => {
      expect(loneTeen(6, 18)).toBe(true);
    });
    

    it('loneTeen(99, 13) -> true)', () => {
      expect(loneTeen(99, 13)).toBe(true);
    });
    

    it('loneTeen(99, 99) -> false)', () => {
      expect(loneTeen(99, 99)).toBe(false);
    });
    
});
