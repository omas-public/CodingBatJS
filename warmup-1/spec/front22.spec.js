/*
Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.

front22("kitten") → "kikittenki"
front22("Ha") → "HaHaHa"
front22("abc") → "ababcab"

*/

const front22 = (str) => {
  // Write code here

};
    
describe('front22(str)', () => {

    it('front22("kitten") -> "kikittenki")', () => {
      expect(front22("kitten")).toBe("kikittenki");
    });
    

    it('front22("Ha") -> "HaHaHa")', () => {
      expect(front22("Ha")).toBe("HaHaHa");
    });
    

    it('front22("abc") -> "ababcab")', () => {
      expect(front22("abc")).toBe("ababcab");
    });
    

    it('front22("ab") -> "ababab")', () => {
      expect(front22("ab")).toBe("ababab");
    });
    

    it('front22("a") -> "aaa")', () => {
      expect(front22("a")).toBe("aaa");
    });
    

    it('front22("") -> "")', () => {
      expect(front22("")).toBe("");
    });
    

    it('front22("Logic") -> "LoLogicLo")', () => {
      expect(front22("Logic")).toBe("LoLogicLo");
    });
    
});
