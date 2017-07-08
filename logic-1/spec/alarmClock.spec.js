/*
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation 
*/

const then on weekdays it should be "10:00" and weekends it should be "off" = . => {
  // Write code here

};
    
describe('then on weekdays it should be "10:00" and weekends it should be "off".', () => {

    it(')', () => {
      expect().toBe(undefined);
    });
    

    it('alarmClock(1, false) -> "7:00")', () => {
      expect(alarmClock(1, false)).toBe("7:00");
    });
    

    it('alarmClock(5, false) -> "7:00")', () => {
      expect(alarmClock(5, false)).toBe("7:00");
    });
    

    it('alarmClock(0, false) -> "10:00")', () => {
      expect(alarmClock(0, false)).toBe("10:00");
    });
    
});
