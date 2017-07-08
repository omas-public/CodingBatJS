/*
Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.

front3("Java") → "JavJavJav"
front3("Chocolate") → "ChoChoCho"
front3("abc") → "abcabcabc"

*/

const front3 = (str) => {
  // Write code here

};
    
describe('front3(str)', () => {

    it('front3("Java") -> "JavJavJav")', () => {
      expect(front3("Java")).toBe("JavJavJav");
    });
    

    it('front3("Chocolate") -> "ChoChoCho")', () => {
      expect(front3("Chocolate")).toBe("ChoChoCho");
    });
    

    it('front3("abc") -> "abcabcabc")', () => {
      expect(front3("abc")).toBe("abcabcabc");
    });
    

    it('front3("abcXYZ") -> "abcabcabc")', () => {
      expect(front3("abcXYZ")).toBe("abcabcabc");
    });
    

    it('front3("ab") -> "ababab")', () => {
      expect(front3("ab")).toBe("ababab");
    });
    

    it('front3("a") -> "aaa")', () => {
      expect(front3("a")).toBe("aaa");
    });
    

    it('front3("") -> "")', () => {
      expect(front3("")).toBe("");
    });
    
});
