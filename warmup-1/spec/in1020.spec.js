/*
Given 2 int values, return true if either of them is in the range 10..20 inclusive.

in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false

*/

const in1020 = (a, b) => {
  // Write code here

};
    
describe('in1020(a, b)', () => {

    it('in1020(12, 99) -> true)', () => {
      expect(in1020(12, 99)).toBe(true);
    });
    

    it('in1020(21, 12) -> true)', () => {
      expect(in1020(21, 12)).toBe(true);
    });
    

    it('in1020(8, 99) -> false)', () => {
      expect(in1020(8, 99)).toBe(false);
    });
    

    it('in1020(99, 10) -> true)', () => {
      expect(in1020(99, 10)).toBe(true);
    });
    

    it('in1020(20, 20) -> true)', () => {
      expect(in1020(20, 20)).toBe(true);
    });
    

    it('in1020(21, 21) -> false)', () => {
      expect(in1020(21, 21)).toBe(false);
    });
    

    it('in1020(9, 9) -> false)', () => {
      expect(in1020(9, 9)).toBe(false);
    });
    
});
