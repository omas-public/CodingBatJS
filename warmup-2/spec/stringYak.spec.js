/*
Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

stringYak("yakpak") → "pak"
stringYak("pakyak") → "pak"
stringYak("yak123ya") → "123ya"

*/

const stringYak = (str) => {
  // Write code here

};
    
describe('stringYak(str)', () => {

    it('stringYak("yakpak") -> "pak")', () => {
      expect(stringYak("yakpak")).toBe("pak");
    });
    

    it('stringYak("pakyak") -> "pak")', () => {
      expect(stringYak("pakyak")).toBe("pak");
    });
    

    it('stringYak("yak123ya") -> "123ya")', () => {
      expect(stringYak("yak123ya")).toBe("123ya");
    });
    

    it('stringYak("yak") -> "")', () => {
      expect(stringYak("yak")).toBe("");
    });
    

    it('stringYak("yakxxxyak") -> "xxx")', () => {
      expect(stringYak("yakxxxyak")).toBe("xxx");
    });
    

    it('stringYak("HiyakHi") -> "HiHi")', () => {
      expect(stringYak("HiyakHi")).toBe("HiHi");
    });
    

    it('stringYak("xxxyakyyyakzzz") -> "xxxyyzzz")', () => {
      expect(stringYak("xxxyakyyyakzzz")).toBe("xxxyyzzz");
    });
    
});
