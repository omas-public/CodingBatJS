/*
Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true

*/

const array123 = (nums) => {
  // Write code here

};
    
describe('array123(nums)', () => {

    it('array123([1, 1, 2, 3, 1]) -> true)', () => {
      expect(array123([1, 1, 2, 3, 1])).toBe(true);
    });
    

    it('array123([1, 1, 2, 4, 1]) -> false)', () => {
      expect(array123([1, 1, 2, 4, 1])).toBe(false);
    });
    

    it('array123([1, 1, 2, 1, 2, 3]) -> true)', () => {
      expect(array123([1, 1, 2, 1, 2, 3])).toBe(true);
    });
    

    it('array123([1, 1, 2, 1, 2, 1]) -> false)', () => {
      expect(array123([1, 1, 2, 1, 2, 1])).toBe(false);
    });
    

    it('array123([1, 2, 3, 1, 2, 3]) -> true)', () => {
      expect(array123([1, 2, 3, 1, 2, 3])).toBe(true);
    });
    

    it('array123([1, 2, 3]) -> true)', () => {
      expect(array123([1, 2, 3])).toBe(true);
    });
    

    it('array123([1, 1, 1]) -> false)', () => {
      expect(array123([1, 1, 1])).toBe(false);
    });
    

    it('array123([1, 2]) -> false)', () => {
      expect(array123([1, 2])).toBe(false);
    });
    

    it('array123([1]) -> false)', () => {
      expect(array123([1])).toBe(false);
    });
    

    it('array123([]) -> false)', () => {
      expect(array123([])).toBe(false);
    });
    
});
