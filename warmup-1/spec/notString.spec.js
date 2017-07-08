/*
Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.

notString("candy") → "not candy"
notString("x") → "not x"
notString("not bad") → "not bad"

*/

const notString = (str) => {
  // Write code here

};
    
describe('notString(str)', () => {

    it('notString("candy") -> "not candy")', () => {
      expect(notString("candy")).toBe("not candy");
    });
    

    it('notString("x") -> "not x")', () => {
      expect(notString("x")).toBe("not x");
    });
    

    it('notString("not bad") -> "not bad")', () => {
      expect(notString("not bad")).toBe("not bad");
    });
    

    it('notString("bad") -> "not bad")', () => {
      expect(notString("bad")).toBe("not bad");
    });
    

    it('notString("not") -> "not")', () => {
      expect(notString("not")).toBe("not");
    });
    

    it('notString("is not") -> "not is not")', () => {
      expect(notString("is not")).toBe("not is not");
    });
    

    it('notString("no") -> "not no")', () => {
      expect(notString("no")).toBe("not no");
    });
    
});
