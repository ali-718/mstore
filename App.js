/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,BackHandler,Image,SafeAreaView,ScrollView} from 'react-native';
import {createBottomTabNavigator,createStackNavigator,createDrawerNavigator,createAppContainer} from 'react-navigation';
import HomeComponent from './src/components/Home';
import CategoriesComponent from './src/components/Categories';
import SearchComponent from './src/components/Search';
import CartComponent from './src/components/Cart';
import AccountComponent from './src/components/Account';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeIcon from './src/Assets/Icons/Home.png';
import Menu from './src/Assets/Icons/Menu.png';
import {BottomNavigation, Drawer} from 'react-native-paper';
import Login from './src/components/Login';
import TwoColumn from './src/components/TwoColumn';
import ListView from './src/components/ListView';
import ThreeColumn from './src/components/ThreeColumn';
import Person from './src/Assets/Images/Account_Person.png';
import { Label } from 'native-base';
import Item from './src/components/Item';
import Item2 from './src/components/Item2';
import Signup from './src/components/signup';
import Splash from './src/components/splashscreen';
import Forgot from './src/components/Forgotpass';
import navigationOptions from './src/components/Drawer';
import Index from './Includer';


export default class App extends React.Component {

  static navigationOptions = {
    drawerLabel:() => null
  }

  state={
    Lang:"ar"
  }

  render() {
    return (
        <DrawerNav />
    );
  }
}


const DrawerNav = createStackNavigator({
  Home:{
    screen:Index
  }
},
{
  headerMode:"none"
}
)

const DrawerNav_Arabic = createDrawerNavigator({
  Splash:{
    screen:Splash
  },
   Home:{
    screen:HomeComponent,
  },
  Item:{
    screen:Item
  },
  Signup:{
    screen:Signup
  },
  App:{
    screen:App
  },
  ThreeColumn:{
    screen:ThreeColumn
  },
  TwoColumn:{
    screen:TwoColumn
  },
  ListView:{
    screen:ListView
  },
  Item2:{
    screen:Item2
  },
  Cart:{
    screen:CartComponent
  },
  Categories:{
    screen:CategoriesComponent
  },
  Search:{
    screen:SearchComponent,
  },
  Account:{
    screen:AccountComponent
  },
  Login:{
    screen:Login
  },
  Forgot:{
    screen:Forgot
  },
},
{
  contentComponent:navigationOptions,
  contentOptions:{
  activeTintColor:"#42C2BF",
  inactiveTintColor:"black",
  activeBackgroundColor:"rgba(0,0,0,0)",
  inactiveBackgroundColor:"rgba(0,0,0,0)",
  },
  drawerPosition:"right"
})
