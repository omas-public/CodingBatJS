/*
Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

everyNth("Miracle", 2) → "Mrce"
everyNth("abcdefg", 2) → "aceg"
everyNth("abcdefg", 3) → "adg"

*/

const everyNth = (str, n) => {
  // Write code here

};
    
describe('everyNth(str, n)', () => {

    it('everyNth("Miracle", 2) -> "Mrce")', () => {
      expect(everyNth("Miracle", 2)).toBe("Mrce");
    });
    

    it('everyNth("abcdefg", 2) -> "aceg")', () => {
      expect(everyNth("abcdefg", 2)).toBe("aceg");
    });
    

    it('everyNth("abcdefg", 3) -> "adg")', () => {
      expect(everyNth("abcdefg", 3)).toBe("adg");
    });
    

    it('everyNth("Chocolate", 3) -> "Cca")', () => {
      expect(everyNth("Chocolate", 3)).toBe("Cca");
    });
    

    it('everyNth("Chocolates", 3) -> "Ccas")', () => {
      expect(everyNth("Chocolates", 3)).toBe("Ccas");
    });
    

    it('everyNth("Chocolates", 4) -> "Coe")', () => {
      expect(everyNth("Chocolates", 4)).toBe("Coe");
    });
    

    it('everyNth("Chocolates", 100) -> "C")', () => {
      expect(everyNth("Chocolates", 100)).toBe("C");
    });
    
});
