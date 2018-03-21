import {Notifications, Permissions} from 'expo'

export const localNotification = {
    title: 'BLA Remember to practice for your test',
    body: 'Do your daily quiz', 
    ios: { 
      sound: true 
    },
};

let noticationTime = new Date();
noticationTime.setHours(22,0,0,0)
noticationTime.setMinutes(21)
console.log(noticationTime)

export const schedulingOptions = {
    time: noticationTime, // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
    repeat: "day"
};
