/*
Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

stringX("xxHxix") → "xHix"
stringX("abxxxcd") → "abcd"
stringX("xabxxxcdx") → "xabcdx"

*/

const stringX = (str) => {
  // Write code here

};
    
describe('stringX(str)', () => {

    it('stringX("xxHxix") -> "xHix")', () => {
      expect(stringX("xxHxix")).toBe("xHix");
    });
    

    it('stringX("abxxxcd") -> "abcd")', () => {
      expect(stringX("abxxxcd")).toBe("abcd");
    });
    

    it('stringX("xabxxxcdx") -> "xabcdx")', () => {
      expect(stringX("xabxxxcdx")).toBe("xabcdx");
    });
    

    it('stringX("xKittenx") -> "xKittenx")', () => {
      expect(stringX("xKittenx")).toBe("xKittenx");
    });
    

    it('stringX("Hello") -> "Hello")', () => {
      expect(stringX("Hello")).toBe("Hello");
    });
    

    it('stringX("xx") -> "xx")', () => {
      expect(stringX("xx")).toBe("xx");
    });
    

    it('stringX("x") -> "x")', () => {
      expect(stringX("x")).toBe("x");
    });
    

    it('stringX("") -> "")', () => {
      expect(stringX("")).toBe("");
    });
    
});
