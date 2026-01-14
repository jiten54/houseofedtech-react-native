import { WebView } from 'react-native-webview';
export default function LMSWebView({onLoad}:{onLoad:()=>void}){
 return <WebView source={{uri:'https://www.wikipedia.org'}} style={{flex:1}} onLoadEnd={onLoad}/>;
}