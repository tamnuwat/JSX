import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state ={
      firstName : '',
      lastName : '',
      studentid : '',
      output: ''
    }
  }

  btnPress()
  {
    var out = "Your Name is "+this.state.firstName+' '       +this.state.lastName+'\n'+'Your StudentID is' + this.state.studentid; 

    this.setState({output:out})
  }


  render() {
    return (
      <LinearGradient
        colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
        style={{ flex: 1 }}>
        <View style={{flex: 1,marginTop:50}} >
          <TextInput style={styles.txtIn2} placeholder="FirstName" onChangeText={(text) => this.setState({firstName:text})}></TextInput>

          <TextInput style={styles.txtIn2} placeholder="LastName" onChangeText={(text) => this.setState({lastName:text})}></TextInput>

          <TextInput style={styles.txtIn2} placeholder="StudentID" onChangeText={(text) => this.setState({studentid:text})}></TextInput>

          <Text style={styles.txtShow}>{this.state.output} </Text>
          <TouchableOpacity style={styles.viewBtn}><Text style={{textAlign : 'center', fontSize :20, color:'#ffffff'}} onPress={()=>this.btnPress()}>OK</Text></TouchableOpacity>
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

  viewBtn: {
    height: 50,
    backgroundColor: '#86A8E7',
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
