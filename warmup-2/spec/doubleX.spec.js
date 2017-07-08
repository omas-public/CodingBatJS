/*
Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

doubleX("axxbb") → true
doubleX("axaxax") → false
doubleX("xxxxx") → true

*/

const doubleX = (str) => {
  // Write code here

};
    
describe('doubleX(str)', () => {

    it('doubleX("axxbb") -> true)', () => {
      expect(doubleX("axxbb")).toBe(true);
    });
    

    it('doubleX("axaxax") -> false)', () => {
      expect(doubleX("axaxax")).toBe(false);
    });
    

    it('doubleX("xxxxx") -> true)', () => {
      expect(doubleX("xxxxx")).toBe(true);
    });
    

    it('doubleX("xaxxx") -> false)', () => {
      expect(doubleX("xaxxx")).toBe(false);
    });
    

    it('doubleX("aaaax") -> false)', () => {
      expect(doubleX("aaaax")).toBe(false);
    });
    

    it('doubleX("") -> false)', () => {
      expect(doubleX("")).toBe(false);
    });
    

    it('doubleX("abc") -> false)', () => {
      expect(doubleX("abc")).toBe(false);
    });
    

    it('doubleX("x") -> false)', () => {
      expect(doubleX("x")).toBe(false);
    });
    

    it('doubleX("xx") -> true)', () => {
      expect(doubleX("xx")).toBe(true);
    });
    

    it('doubleX("xax") -> false)', () => {
      expect(doubleX("xax")).toBe(false);
    });
    

    it('doubleX("xaxx") -> false)', () => {
      expect(doubleX("xaxx")).toBe(false);
    });
    
});
