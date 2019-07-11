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
import {createBottomTabNavigator,createStackNavigator,DrawerNavigator,createAppContainer} from 'react-navigation';
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
import Contact from './src/components/contact';
import Policy from './src/components/Policy';
import HomeArabic from './src/components/Home_Arabic';
import ItemArabic from './src/components/Item_Arabic';
import SignupArabic from './src/components/Signup_Arabic';
import ThreeColumnArabic from './src/components/Threecolumn_Arabic';
import TwoColumnArabic from './src/components/Twocolumn_Arabic';
import ListViewArabic from './src/components/Listview_Arabic';
import Item2Arabic from './src/components/Item2_Arabic';
import CartArabic from './src/components/Cart_Arabic';
import CategoriesArabic from './src/components/Categories_Arabic';
import SearchArabic from './src/components/Search_Arabic';
import AccountArabic from './src/components/Account_Arabic';
import LoginArabic from './src/components/Login_Arabic';
import ForgotArabic from './src/components/forgotpass_Arabic';
import PolicyArabic from './src/components/Policy_Arabic';
import SplashArabic from './src/components/splashscreen_Arabic';
import ContactArabic from './src/components/contact_Arabic';
import RNCreditCard from './src/components/creditCard';


export default class Index extends Component {

  static navigationOptions = {
    drawerLabel:() => null
  }

  state={
    Lang:this.props.navigation.getParam('Lang',"en")
  }

  render() {
    return (
        <View style={{flex:1}}>
          {this.state.Lang == "en" ? <DrawerNav /> : <DrawerNav_Arabic />}
        </View>
    );
  }
}

const DrawerNav = DrawerNavigator({
  Splash:{
    screen:Splash,
  },
  CreditCard:{
    screen:RNCreditCard
  },
  Policy:{
    screen:Policy
  },
  Contact:{
    screen:Contact
  },
  Item:{
    screen:Item
  },
  Signup:{
    screen:Signup
  },
  Index:{
    screen:Index,
    navigationOptions:{
      drawerLockMode:"locked-closed"
    }
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
  Home:{
    screen:HomeComponent,
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
})

const DrawerNav_Arabic = DrawerNavigator({
  Splash:{
    screen:SplashArabic
  },
  CreditCard:{
    screen:RNCreditCard
  },
   Home:{
    screen:HomeArabic,
  },
  Policy:{
    screen:PolicyArabic
  },
  Item:{
    screen:ItemArabic
  },
  Signup:{
    screen:SignupArabic
  },
  Index:{
    screen:Index,
    navigationOptions:{
      drawerLockMode:"locked-closed"
    }
  },
  ThreeColumn:{
    screen:ThreeColumnArabic
  },
  TwoColumn:{
    screen:TwoColumnArabic
  },
  ListView:{
    screen:ListViewArabic
  },
  Item2:{
    screen:Item2Arabic
  },
  Cart:{
    screen:CartArabic
  },
  Categories:{
    screen:CategoriesArabic,
  },
  Search:{
    screen:SearchArabic,
  },
  Contact:{
    screen:ContactArabic
  },
  Account:{
    screen:AccountArabic
  },
  CreditCard:{
    screen:RNCreditCard
  },
  Login:{
    screen:LoginArabic
  },
  Forgot:{
    screen:ForgotArabic
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
