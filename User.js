import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
        style={{ flex: 1 }}>
        <View style={{flex: 1,marginTop:50}} >
          <TextInput style={styles.txtIn2} placeholder="FirstName" ></TextInput>

          <TextInput style={styles.txtIn2} placeholder="LastName"></TextInput>

          <TextInput style={styles.txtIn2} placeholder="StudentID"></TextInput>

          <Text style={styles.txtShow}> </Text>

           <TouchableOpacity style={styles.btn}><Text style={{textAlign : 'center', fontSize :20, color:'#ffffff'}}>OK</Text></TouchableOpacity>
          </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  txtIn2: {
    alignItems: 'center',
    height: 50,
    backgroundColor: 'transparent',
    padding: 10,
    margin: 5,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
  },

  btn: {
    alignItems: 'center',
    height: 50,
    backgroundColor: '#86A8E7',
    padding: 10,
    margin: 10,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
  },
  txtShow: {
    alignItems: 'center',
    height: 200,
    backgroundColor: 'transparent',
    padding: 10,
    margin: 5,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
  },
});
