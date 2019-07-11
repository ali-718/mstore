import React from 'react';
import { Text, View, SafeAreaView, Image, ScrollView, StyleSheet, TouchableOpacity,BackHandler } from 'react-native';
import Person from '../Assets/Images/Account_Person.png';
import {DrawerItems} from 'react-navigation';


const navigationOptions = (props) => (
    <SafeAreaView style={{flex:1,}}>
    <View style={{alignItems:"center"}}>
   <View style={styles.DrawerView}>
    <Image source={Person} style={{width:90, height:90, borderRadius:50}} />
    <Text style={{color:'black',fontWeight:"bold", fontSize:20}}>Guest</Text>
    <Text style={{color:'black'}}>info@ecommerce.com</Text>
   </View>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>      
    </SafeAreaView>
  );

  
const styles = StyleSheet.create({
    DrawerView:{
      height:150,
      width:"90%", 
      alignItems:'center', 
      justifyContent: 'center', 
      borderBottomWidth: 2, 
      borderColor: 'white',
      marginBottom: 20,
    },
    DrawerIcon:{
      width:24,
      height:24,
      color:"white"
    }
  })

  export default navigationOptions;