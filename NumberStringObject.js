import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

    

   render() {

    // +,-,*,-

     var a = 10;
     var b = 20;
     var c = 30;
	   var d = "25.05";
	   var e = "10";

     var f = "Name";
     var g = "LastName";
     var h = "Please locate where occurs!";
     var i = "Apple, Banana, Kiwi";
     var j = {
                firstName: "John",
                lastName: "Doe",
                age: 50,
                eyeColor: "blue"
              };

     var l = ["Saab", "Volvo", "BMW"];

      // 1. แสดงผลบวกของ A และ  B

      // 2. แสดงผลลบของ A และ  B

      // 3. แสดงผลคูณของ A และ  B

      // 4. แสดงผลหารของ A และ  B โดยเก็บใส่ตัวแปร z แล้วนำตัวแปร z มาแสดง
	  
      // 5. จงทำการคำนวนผลลัพธ์ต่อไปนี้ (a^2 + b^2)*C
	  
      // 6. จงทำการคำนวนผลลัพธ์ต่อไปนี้  sqrl(d^2 + e^2)

      // 7. ทำการต่อ String f และ g เข้าด้วยกัน

      // 8. ทำการหาความยาวของ String h

      // 9. ทำการหาตำแหน่งข้ต้อความ where จาก string h

      // 10. ทำการดึงข้อความคำว่า Banana ออกจาก String i

      // 11. ทำการแสดง eyeColor จาก object j

      // 12. ทำการเรียง Array ตามลำดับตัวอักษร

      // 13. ทำการแสดง Array ตำแหน่งที่ 1
	  

      return (
         <View style={{flex:1}}>
            <Text style={{marginTop :100}}>
            {l.length}
            </Text>
         </View>
      );
   }
}