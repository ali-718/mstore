import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity,ScrollView,BackHandler } from 'react-native';
import Zaaviyah from '../Assets/Images/company.png'
import { Icon } from 'native-base';
import Logo from '../Assets/Images/logo.png';

export default class Policy extends Component {

  static navigationOptions={
    drawerLabel:() => null
  }

    state = {
    Lang:"en"
    }

    _didFocusSubscription;
    _willBlurSubscription;
    
    constructor(props) {
      super(props);
      this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
        BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
      );
    }
  
    componentDidMount() {
      this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
        BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
      );
    }
  
    onBackButtonPressAndroid = () => {
      this.props.navigation.navigate('Account',{Lang:this.state.Lang})
      return true
      }
  
    componentWillUnmount() {
      this._didFocusSubscription && this._didFocusSubscription.remove();
      this._willBlurSubscription && this._willBlurSubscription.remove();
    }

  render() {
    return (
      <ScrollView style={{backgroundColor: "white",}}>
       {/* Header */}
       <View style={style.Header}>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
          }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Account',{Lang:this.state.Lang})}>
              <Icon name="arrow-back" style={{fontSize:20}} />
            </TouchableOpacity>
          </View>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
            justifyContent: 'center',
          }}>
              <Image source={Logo} style={{height:40,width:110}} />
          </View>
        </View>
        {/* Header ends here */}
        <View style={{alignItems:"center"}}>
            <Image source={Zaaviyah} style={{width:200,height:200}} />
        </View>
        <View style={{alignItems:"center"}}>
           <Text style={{color:"black",margin:20}}>
           This page is designed to help businesses, especially BBB Accredited Businesses, create an online privacy notice for use on the Internet. A privacy notice should be based on the following five elements:

Notice (what personal information is being collected on the site)
Choice (what options the customer has about how/whether personal data is collected and used)
Access (how a customer can see what data has been collected and change/correct it if necessary)
Security (state how any data that is collected is stored/protected)
Redress (what customer can do if privacy policy is not met)
Whatever final notice you develop is up to you, and will be your responsibility to maintain. The Better Business Bureau does not recommend any one set of privacy practices, nor any single privacy notice.

Below is a sample privacy notice that you may want to use as a guide for your privacy notice. Note that there is a place for your company name or URL in the first paragraph and a place for your phone number and email address in the last paragraph. Please make sure to personalize these. DO NOT simply cut-and-paste this policy as is.
           </Text>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
    Header:{
        width:"100%",
        height:50,
        backgroundColor: 'white',
        flexDirection: 'row',
      }
})
