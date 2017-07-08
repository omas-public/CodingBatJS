/*
Given a string, return true if the string starts with "hi" and false otherwise.

startHi("hi there") → true
startHi("hi") → true
startHi("hello hi") → false

*/

const startHi = (str) => {
  // Write code here

};
    
describe('startHi(str)', () => {

    it('startHi("hi there") -> true)', () => {
      expect(startHi("hi there")).toBe(true);
    });
    

    it('startHi("hi") -> true)', () => {
      expect(startHi("hi")).toBe(true);
    });
    

    it('startHi("hello hi") -> false)', () => {
      expect(startHi("hello hi")).toBe(false);
    });
    

    it('startHi("he") -> false)', () => {
      expect(startHi("he")).toBe(false);
    });
    

    it('startHi("h") -> false)', () => {
      expect(startHi("h")).toBe(false);
    });
    

    it('startHi("") -> false)', () => {
      expect(startHi("")).toBe(false);
    });
    

    it('startHi("ho hi") -> false)', () => {
      expect(startHi("ho hi")).toBe(false);
    });
    

    it('startHi("hi ho") -> true)', () => {
      expect(startHi("hi ho")).toBe(true);
    });
    
});
