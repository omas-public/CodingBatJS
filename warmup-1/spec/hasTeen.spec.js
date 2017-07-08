/*
We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true

*/

const hasTeen = (a, b, c) => {
  // Write code here

};
    
describe('hasTeen(a, b, c)', () => {

    it('hasTeen(13, 20, 10) -> true)', () => {
      expect(hasTeen(13, 20, 10)).toBe(true);
    });
    

    it('hasTeen(20, 19, 10) -> true)', () => {
      expect(hasTeen(20, 19, 10)).toBe(true);
    });
    

    it('hasTeen(20, 10, 13) -> true)', () => {
      expect(hasTeen(20, 10, 13)).toBe(true);
    });
    

    it('hasTeen(1, 20, 12) -> false)', () => {
      expect(hasTeen(1, 20, 12)).toBe(false);
    });
    

    it('hasTeen(19, 20, 12) -> true)', () => {
      expect(hasTeen(19, 20, 12)).toBe(true);
    });
    

    it('hasTeen(12, 20, 19) -> true)', () => {
      expect(hasTeen(12, 20, 19)).toBe(true);
    });
    

    it('hasTeen(12, 9, 20) -> false)', () => {
      expect(hasTeen(12, 9, 20)).toBe(false);
    });
    

    it('hasTeen(12, 18, 20) -> true)', () => {
      expect(hasTeen(12, 18, 20)).toBe(true);
    });
    

    it('hasTeen(14, 2, 20) -> true)', () => {
      expect(hasTeen(14, 2, 20)).toBe(true);
    });
    

    it('hasTeen(4, 2, 20) -> false)', () => {
      expect(hasTeen(4, 2, 20)).toBe(false);
    });
    

    it('hasTeen(11, 22, 22) -> false)', () => {
      expect(hasTeen(11, 22, 22)).toBe(false);
    });
    
});
