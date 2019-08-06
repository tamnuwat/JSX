import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Button,Alert} from 'react-native';

export default class App extends React.Component {
	


  render() {
    return (
          <View style={{flex: 1}} >
              <Text style={{marginTop:100}}>
                  {"Input Number1 :"}
              </Text>
              <TextInput style={styles.txt}  ></TextInput>
              <Text >
                  {"Input Number2 :"}
              </Text>
              <TextInput style={styles.txt} ></TextInput>
               <Text >
                  {"Output :"}
              </Text>

              <Text style={styles.txt} >
                  
              </Text>

              <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>

                <View style={{flex: 1}}>
                  <TouchableOpacity style={styles.btn}><Text >+</Text></TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                  <TouchableOpacity style={styles.btn}><Text >-</Text></TouchableOpacity>
                </View>


              </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  btn:{
    alignItems:"center",
    justifyContent:"center", 
    backgroundColor:"gray",
    height:50,
    marginTop: 20,
    marginRight:10,
     marginLeft:10,
    borderRadius: 50,
  },
  txt:{
    alignItems:"center",
    justifyContent:"center", 
    backgroundColor:"gray",
    alignContent: 'center',
    height:50,
    marginTop: 10,
    borderRadius: 50
  }
});
