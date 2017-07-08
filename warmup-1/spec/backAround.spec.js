/*
Given a string, take the last char and return a new string with the last char added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.

backAround("cat") → "tcatt"
backAround("Hello") → "oHelloo"
backAround("a") → "aaa"

*/

const backAround = (str) => {
  // Write code here

};
    
describe('backAround(str)', () => {

    it('backAround("cat") -> "tcatt")', () => {
      expect(backAround("cat")).toBe("tcatt");
    });
    

    it('backAround("Hello") -> "oHelloo")', () => {
      expect(backAround("Hello")).toBe("oHelloo");
    });
    

    it('backAround("a") -> "aaa")', () => {
      expect(backAround("a")).toBe("aaa");
    });
    

    it('backAround("abc") -> "cabcc")', () => {
      expect(backAround("abc")).toBe("cabcc");
    });
    

    it('backAround("read") -> "dreadd")', () => {
      expect(backAround("read")).toBe("dreadd");
    });
    

    it('backAround("boo") -> "obooo")', () => {
      expect(backAround("boo")).toBe("obooo");
    });
    
});
