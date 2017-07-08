/*
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;

frontTimes("Chocolate", 2) → "ChoCho"
frontTimes("Chocolate", 3) → "ChoChoCho"
frontTimes("Abc", 3) → "AbcAbcAbc"

*/

const frontTimes = (str, n) => {
  // Write code here

};
    
describe('frontTimes(str, n)', () => {

    it('frontTimes("Chocolate", 2) -> "ChoCho")', () => {
      expect(frontTimes("Chocolate", 2)).toBe("ChoCho");
    });
    

    it('frontTimes("Chocolate", 3) -> "ChoChoCho")', () => {
      expect(frontTimes("Chocolate", 3)).toBe("ChoChoCho");
    });
    

    it('frontTimes("Abc", 3) -> "AbcAbcAbc")', () => {
      expect(frontTimes("Abc", 3)).toBe("AbcAbcAbc");
    });
    

    it('frontTimes("Ab", 4) -> "AbAbAbAb")', () => {
      expect(frontTimes("Ab", 4)).toBe("AbAbAbAb");
    });
    

    it('frontTimes("A", 4) -> "AAAA")', () => {
      expect(frontTimes("A", 4)).toBe("AAAA");
    });
    

    it('frontTimes("", 4) -> "")', () => {
      expect(frontTimes("", 4)).toBe("");
    });
    

    it('frontTimes("Abc", 0) -> "")', () => {
      expect(frontTimes("Abc", 0)).toBe("");
    });
    
});
