import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView,ImageBackground,BackHandler } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Drawer } from 'native-base';
import Logo from '../Assets/Images/logo.png';
import Man from '../Assets/Images/Category_man_banner.jpg';
import Man2 from '../Assets/Images/Category_man_banner2.jpg';
import Cloth from '../Assets/Images/Category_cloth_banner.jpg';
import Woman from '../Assets/Images/Category_woman_banner.jpg';
import Poster from '../Assets/Images/Category_Poster_banner.jpg';
import I18n from 'react-native-i18n';
import ar from '../I18n/ar';
import en from '../I18n/en'


export default class CategoriesArabic extends Component {

    static navigationOptions = {
        drawerLabel:"الاقسام"
    }


  state = {
    Lang:"ar",
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
    this.props.navigation.navigate('Home',{Lang:this.state.Lang})
    this.props.navigation.closeDrawer()
    return true
    }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  render() {

    I18n.fallbacks = true;
    I18n.locale = this.state.Lang;
    I18n.translations = {
      ar,
      en
    };

    return (
      <View style={{flex:1,width:"100%",backgroundColor: "white",}}>
        {/* Header */}
        <View style={style.Header}>
          <View style={{
            alignItems:"flex-end",
            margin:10,
            flexGrow: 1,
          }}>
            <Image source={Logo} style={{height:40,width:110}} />
          </View>
          <View style={{
            alignItems:"flex-end",
            margin:10,
            flexGrow: 1,
            justifyContent: 'center',
          }}>
           <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="align-left" type="FontAwesome" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Header ends here */}

        <ScrollView style={{width:"100%"}}>
              <View style={{marginTop:20,width:"100%",alignItems:"center"}}>
                  <View style={{alignItems:"center",width:"100%"}}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('TwoColumn',{Lang:this.state.Lang})} style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <ImageBackground source={Man} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems: 'center',}}>
                        <View style={{width:"90%",alignItems:"flex-start"}}>
                            <Text style={{color:"white",fontSize:25,marginRight:30}}>{I18n.t('Men')}</Text>
                            <Text style={{color:"white",fontSize:10,marginRight:30}}>{I18n.t('F45')} {I18n.t('Products')}</Text>
                           </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
                  <View style={{alignItems:"center",width:"100%",marginTop:20}}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('TwoColumn',{Lang:this.state.Lang})} style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <ImageBackground source={Woman} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems:"center"}}>
                            <View style={{width:"90%",alignItems:"flex-end"}}>
                              <Text style={{color:"white",fontSize:25,marginRight:30}}>{I18n.t('Women')}</Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>{I18n.t('F35')} {I18n.t('Products')}</Text>
                            </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
                  <View style={{alignItems:"center",width:"100%",marginTop:20}}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('TwoColumn',{Lang:this.state.Lang})} style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <ImageBackground source={Man2} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems:"center"}}>
                          <View style={{width:"90%",alignItems:"flex-start"}}>
                              <Text style={{color:"white",fontSize:25,marginRight:30}}>{I18n.t('music')}</Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>{I18n.t('F13')} {I18n.t('Products')}</Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
                  <View style={{alignItems:"center",width:"100%",marginTop:20}}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('TwoColumn',{Lang:this.state.Lang})} style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <ImageBackground source={Poster} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems:"center"}}>
                          <View style={{width:"90%",alignItems:"flex-end"}}>
                              <Text style={{color:"white",fontSize:25,marginRight:30}}>{I18n.t('poster')}</Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>{I18n.t('F28')} {I18n.t('Products')}</Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
                  <View style={{alignItems:"center",width:"100%",marginTop:20}}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('TwoColumn',{Lang:this.state.Lang})} style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <ImageBackground source={Cloth} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems: 'center',}}>
                          <View style={{width:"90%",alignItems:"flex-start"}}>
                              <Text style={{color:"white",fontSize:25,marginRight:30}}>{I18n.t('Cloth')}</Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>{I18n.t('F12')} {I18n.t('Products')}</Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
              </View>
        </ScrollView>
        {/* body ends */}

        {/* Footer Tab */}
        <Footer>
          <FooterTab style={{backgroundColor: "white",}}>
            <Button onPress={() => this.props.navigation.navigate('Home',{Lang:this.state.Lang})}>
              <Icon name="home" style={{color:"gainsboro"}} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Categories',{Lang:this.state.Lang})}>
              <Icon name="th-large" type="FontAwesome" style={{color:"#42C2BF"}}/>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Search',{Lang:this.state.Lang})}>
              <Icon active name="search" type="FontAwesome" style={{color:"gainsboro"}} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Cart',{Lang:this.state.Lang})}>
              <Icon name="cart" style={{color:"gainsboro"}} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Account',{Lang:this.state.Lang})}>
              <Icon name="user" type="FontAwesome" style={{color:"gainsboro"}} />
            </Button>
          </FooterTab>
        </Footer>
      </View>
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