/*
We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special. Use the % "mod" operator
*/

const specialEleven = (n) => {
  // Write code here

};

describe('specialEleven(n)', () => {


    it('specialEleven(22) -> true)', () => {
      expect(specialEleven(22)).toBe(true);
    });


    it('specialEleven(23) -> true)', () => {
      expect(specialEleven(23)).toBe(true);
    });


    it('specialEleven(24) -> false)', () => {
      expect(specialEleven(24)).toBe(false);
    });

});
