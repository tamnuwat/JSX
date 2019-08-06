import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
   render() {

     var a =10;
     var b =20.25;
     var c = 'a';
     var d = "Hello"
     var e = new Date().getDate();
     var f = {Name:"Tamnuwat", GPA:4.00};
     var g = [10,30,56];
     var h = true;


      return (
         <View>
            <Text>{a} {b} {c} {d} {e} </Text>
            <Text>{typeof(a)} {typeof(b)} {typeof(c)} {typeof(d)} {typeof(e)} {typeof(f)} {typeof(g)} {typeof(h)}</Text>
         </View>
      );
   }
}