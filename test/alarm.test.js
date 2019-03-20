const alarm = require('../app/alarm');

test('Moans if too early', () => {
  let timeNow = new Date();
  timeNow.setHours(9);
  expect(alarm.wakeup(timeNow)).toBe("Ugggggh its too early - I'm not waking up yet");
});

test('CurrentHour is LunchTime', () => {
  let timeNow = new Date();
  timeNow.setHours(13);
  expect(alarm.wakeup(timeNow)).toBe("Yessssss its lunch time!!!");
});

test('CurrentHour is After LunchTime', () => {
  let timeNow = new Date();
  timeNow.setHours(15);
  expect(alarm.wakeup(timeNow)).toBe("Get up!! You're wasting the day");
});

test('People Who used Alaram', () => {
  const alaramUsedUser =  ["James","Susan","Geoff","Lisa"];
  expect(alarm.alaramUsed()).toEqual(alaramUsedUser);
});

test('People Who used Alaram and Add 1 Hour Time', () => {
  const alaramUsedUser =  ["James wakes up at 8am","Susan wakes up at 2pm",
  "Geoff wakes up at 3pm","Lisa wakes up at 7am"];
  expect(alarm.peopleWakeUpTimes()).toEqual(alaramUsedUser);
});

test('People wakes up the before 9 get increased pay' ,() => {
   let wakeupEarlyPay = [ { name: "James", wakeUpTime: 7 } , {name: "Lisa", wakeUpTime: 6 }];
  expect(alarm.wakeupEarlyPay(9)).toEqual(wakeupEarlyPay);

});

test('CEo Change Minds' ,() => {
  let wakeupEarlyPay = [ { name: "James", wakeUpTime: 7 },
  { name: "Susan", wakeUpTime: 13 },
  { name: "Geoff", wakeUpTime: 14 },
  { name: "Lisa", wakeUpTime: 6 }];
 expect(alarm.wakeupEarlyPay(14)).toEqual(wakeupEarlyPay);

});

test('Snoozing for a set amount', () => {
  expect(alarm.snooze()).toBe(20);
});
