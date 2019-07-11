import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity,ScrollView,BackHandler } from 'react-native';
import Zaaviyah from '../Assets/Images/company.png'
import { Icon } from 'native-base';
import Logo from '../Assets/Images/logo.png';

export default class ContactArabic extends Component {

  static navigationOptions={
    drawerLabel:() => null
  }

    state = {
    Lang:"ar"
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
        <View style={{alignItems:"center",marginTop: 20,}}>
            <Icon name="envelope" type="FontAwesome" style={{fontSize:40}} />
            <Text style={{color:"black"}}>alimurtuza718@gmail.com</Text>
            <Text style={{color:"black"}}>alihaider589@outlook.com</Text>
        </View>
        <View style={{alignItems:"center",marginTop: 40,}}>
            <Icon name="phone" type="FontAwesome" style={{fontSize:40}} />
            <Text style={{color:"black"}}>+92 3062888544</Text>
            <Text style={{color:"black"}}>+92 3152929915</Text>
        </View>
        <View style={{alignItems:"center",marginTop: 40,margin: 50,marginLeft: 60,}}>
            <Icon name="pin" style={{fontSize:40}} />
            <Text style={{color:"black",}}>403 مبنى دبي ،شارع دمشق ، القصيص 4 ص ب 35538 ​​، دبي ، الإمارات العربية المتحدة</Text>
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
