import { View, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import LMSWebView from '../components/LMSWebView';
import * as Notify from '../services/notifications';

export default function Home(){
 const router=useRouter();
 const [loading,setLoading]=useState(true);

 useEffect(()=>{
  Notify.requestPerm();
 },[]);

 return (
  <View style={styles.container}>
   {loading && <ActivityIndicator size="large" />}
   <LMSWebView onLoad={()=>{setLoading(false);Notify.send('Loaded','WebView ready')}}/>
   <View style={styles.buttons}>
    <Pressable style={styles.btn} onPress={()=>Notify.send('New Course','A new course is available')}><Text>Notify Course</Text></Pressable>
    <Pressable style={styles.btn} onPress={()=>router.push('/video')}><Text>Watch Video</Text></Pressable>
   </View>
  </View>
 );
}
const styles=StyleSheet.create({container:{flex:1},buttons:{padding:16,flexDirection:'row',justifyContent:'space-around'},btn:{padding:12,backgroundColor:'#ddd',borderRadius:8}});