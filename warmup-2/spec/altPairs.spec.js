/*
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

altPairs("kitten") → "kien"
altPairs("Chocolate") → "Chole"
altPairs("CodingHorror") → "Congrr"

*/

const altPairs = (str) => {
  // Write code here

};
    
describe('altPairs(str)', () => {

    it('altPairs("kitten") -> "kien")', () => {
      expect(altPairs("kitten")).toBe("kien");
    });
    

    it('altPairs("Chocolate") -> "Chole")', () => {
      expect(altPairs("Chocolate")).toBe("Chole");
    });
    

    it('altPairs("CodingHorror") -> "Congrr")', () => {
      expect(altPairs("CodingHorror")).toBe("Congrr");
    });
    

    it('altPairs("yak") -> "ya")', () => {
      expect(altPairs("yak")).toBe("ya");
    });
    

    it('altPairs("ya") -> "ya")', () => {
      expect(altPairs("ya")).toBe("ya");
    });
    

    it('altPairs("y") -> "y")', () => {
      expect(altPairs("y")).toBe("y");
    });
    

    it('altPairs("") -> "")', () => {
      expect(altPairs("")).toBe("");
    });
    

    it('altPairs("ThisThatTheOther") -> "ThThThth")', () => {
      expect(altPairs("ThisThatTheOther")).toBe("ThThThth");
    });
    
});
