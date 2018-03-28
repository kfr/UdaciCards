import { AsyncStorage } from "react-native"
import {Notifications, Permissions} from 'expo'

const NOTFICATION_KEY = "UdaciCards:notifcations"


export function clearLocalNotifcation(){
    return AsyncStorage.removeItem(NOTFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)

}

export function createNotification(){
    return {
        title : 'Remember your quiz',
        body: "Don't forget to practice for your test today!",
        ios:{
            sound: true
        },
        android:{
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification(){
    AsyncStorage.getItem(NOTFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
        if(data === null){
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({status})  => {
                if(status === 'granted'){
                    Notifications.cancelAllScheduledNotificationsAsync()
                    
                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate())
                    tomorrow.setHours(12)
                    tomorrow.setMinutes(18)

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(), {
                            time: tomorrow,
                            repeat: 'day'
                        }
                    )

                    AsyncStorage.setItem(NOTFICATION_KEY, JSON.stringify(true))

                    console.log('Set local notification set to ' + tomorrow)
                }    
            })
        }
    })
}