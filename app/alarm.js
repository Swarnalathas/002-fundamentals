// eslint-disable-next-line no-unused-vars
const peopleThatHaveUsedAlarm = [
  { name: "James", wakeUpTime: 7 },
  { name: "Susan", wakeUpTime: 13 },
  { name: "Geoff", wakeUpTime: 14 },
  { name: "Lisa", wakeUpTime: 6 }
];

function alaramUsed(){

  let alaramUserName = [];
 // peopleThatHaveUsedAlarm.forEach(function(people){
   peopleThatHaveUsedAlarm.map(function(people){
    alaramUserName.push(people.name);
  });

  return alaramUserName;
}

function peopleWakeUpTimes () {

  let useWakeUpTime = [];
  peopleThatHaveUsedAlarm.map(function(people){
    let wakeTime = people.wakeUpTime + 1;
    useWakeUpTime.push(people.name + " wakes up at " + covertTimeToAmPm(wakeTime));
  });
  return useWakeUpTime;
}

function covertTimeToAmPm(wakeTime){

  return (wakeTime > 12 ? wakeTime -12 : wakeTime) 
  + (wakeTime < 12 ? 'am' : 'pm')
  
}

function wakeupEarlyPay (time){

  let wakeupEarlyUsers = [];
  peopleThatHaveUsedAlarm.filter(function(people){
    if (people.wakeUpTime <= time)  {
      
      wakeupEarlyUsers.push(people);
    }
  });
  return wakeupEarlyUsers;
}

function wakeup(currentTime) {
  // currentTime will be a Javascript Date object
  // https://www.w3schools.com/jsref/jsref_obj_date.asp
  const currentHour = currentTime.getHours();

 /* if (currentHour < 12) {
    return "Ugggggh its too early - I'm not waking up yet";
  } else if (currentHour >= 12 && currentHour < 14){

    return "Yessssss its lunch time!!!";
  } else {
    return "Get up!! You're wasting the day";
  }*/

  let msg;
  switch (currentHour) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      msg= "Ugggggh its too early - I'm not waking up yet";
      break;
    case 12:
    case 13:
    case 14:
      msg= "Yessssss its lunch time!!!";
      break;
    default:
      msg = "Get up!! You're wasting the day";
      break;
  }
  return msg;
}

/*function snooze() {
  let snoozeAttempts = 0;

  for (let i = 0; i < 20; i++) {
    snoozeAttempts++;
  }

  return snoozeAttempts;
}*/

function snooze(){
  let snoozeAttempts = 0;
  while(snoozeAttempts < 20){
      snoozeAttempts++;
  }
  return snoozeAttempts;
}


module.exports = {
  wakeup,
  snooze,
  alaramUsed,
  peopleWakeUpTimes,
  covertTimeToAmPm,
  wakeupEarlyPay


};
