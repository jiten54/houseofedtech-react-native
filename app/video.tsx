import { View, Button } from 'react-native';
import { Video } from 'expo-av';
import { useRef } from 'react';

export default function VideoPage(){
 const video = useRef<Video|null>(null);
 return (
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <Video ref={video} source={{uri:'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'}} useNativeControls style={{width:'100%',height:300}} />
   <Button title='Play' onPress={()=>video.current?.playAsync()} />
   <Button title='Pause' onPress={()=>video.current?.pauseAsync()} />
  </View>
 );
}