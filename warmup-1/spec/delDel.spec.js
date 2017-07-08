/*
Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

delDel("adelbc") → "abc"
delDel("adelHello") → "aHello"
delDel("adedbc") → "adedbc"

*/

const delDel = (str) => {
  // Write code here

};
    
describe('delDel(str)', () => {

    it('delDel("adelbc") -> "abc")', () => {
      expect(delDel("adelbc")).toBe("abc");
    });
    

    it('delDel("adelHello") -> "aHello")', () => {
      expect(delDel("adelHello")).toBe("aHello");
    });
    

    it('delDel("adedbc") -> "adedbc")', () => {
      expect(delDel("adedbc")).toBe("adedbc");
    });
    

    it('delDel("abcdel") -> "abcdel")', () => {
      expect(delDel("abcdel")).toBe("abcdel");
    });
    

    it('delDel("add") -> "add")', () => {
      expect(delDel("add")).toBe("add");
    });
    

    it('delDel("ad") -> "ad")', () => {
      expect(delDel("ad")).toBe("ad");
    });
    

    it('delDel("a") -> "a")', () => {
      expect(delDel("a")).toBe("a");
    });
    

    it('delDel("") -> "")', () => {
      expect(delDel("")).toBe("");
    });
    

    it('delDel("del") -> "del")', () => {
      expect(delDel("del")).toBe("del");
    });
    

    it('delDel("adel") -> "a")', () => {
      expect(delDel("adel")).toBe("a");
    });
    

    it('delDel("aadelbb") -> "aadelbb")', () => {
      expect(delDel("aadelbb")).toBe("aadelbb");
    });
    
});
