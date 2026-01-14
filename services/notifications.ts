import * as Notifications from 'expo-notifications';
Notifications.setNotificationHandler({
 handleNotification: async () => ({shouldShowAlert:true,shouldPlaySound:true,shouldSetBadge:false})
});
export async function requestPerm(){await Notifications.requestPermissionsAsync();}
export async function send(title:string,body:string){return Notifications.scheduleNotificationAsync({content:{title,body},trigger:{seconds:3}});}
