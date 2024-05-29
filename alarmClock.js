// ---------------------------------------
// ---------------------------------------
// ----------AN ALARM CLOCK---------------
// ---------------------------------------
// ---------------------------------------

const alarmlist = [];
// This displayCurrentTime is a showing current time
function displayCurrentTime() {
    setInterval(() => {
        const currentTime = new Date();
        console.log(currentTime.toLocaleTimeString());
    }, 1000);
}
// This function used to addAlarm
function addAlarm(time, day) {
    alarmlist.push({
        time,
        day,
        snoozeCount: 0
    });
}
// This function used to delete Alarm
function deleteAlarm(time, day) {
    const index = alarmlist.findIndex(alarm => alarm.time === time && alarm.day === day);
    if (index > -1) {
        alarmlist.splice(index, 1);
    } else {
        console.log(`Alarm for ${time} on ${day} not found.`);
    }
}
// This function used to snoozeAlarm
function snoozeAlarm(time, day) {
    const alarm = alarmlist.find(alarm => alarm.time === time && alarm.day === day);
    if (alarm) {
        if (alarm.snoozeCount < 3) {
            let [hours, minutes] = alarm.time.split(':').map(Number);
            minutes += 5;
            if (minutes >= 60) {
                minutes -= 60;
                hours += 1;
                if (hours >= 24) hours = 0;
            }
            alarm.time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
            alarm.snoozeCount += 1;
            console.log(`Alarm snoozed to ${alarm.time}`);
        } else {
            console.log("Maximum snooze count reached.");
        }
    } else {
        console.log(`Alarm for ${time} on ${day} not found.`);
    }
}
// This function used to check Alarms in every minute
function checkAlarms() {
    setInterval(() => {
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });

        alarmlist.forEach(alarm => {
            if (alarm.time === currentTime && alarm.day === currentDay) {
                console.log(`Alarm ringing for ${alarm.time} on ${alarm.day}`);
            }
        });
    }, 60000); 
}

// Here you cant set the alarm 
displayCurrentTime();
addAlarm("18:21", "Tuesday");
addAlarm("18:30", "Tuesday");
checkAlarms();
// Snooze after 1 minute
setTimeout(() => {
    snoozeAlarm("09:00", "Monday");
}, 60000); 
// Delete alarm after 2 minutes
setTimeout(() => {
    deleteAlarm("10:30", "Tuesday");
    console.log("Alarm for 10:30 on Tuesday deleted.");
}, 120000); 
