import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,ScrollView,Image,ImageBackground,Alert,BackHandler } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Drawer, Grid, Col } from 'native-base';
// import {Icon} from 'react-native-vector-icons/FontAwesome'
import Logo from '../Assets/Images/logo.png';
import Short from '../Assets/Images/short.png'
import Shirt from '../Assets/Images/shirt_icon.png'
import Underwear from '../Assets/Images/underwear.png'
import GirlDress from '../Assets/Images/girldress.png'
import Socks from '../Assets/Images/socks.png'
import Shoes from '../Assets/Images/shoes.png'
import Music from '../Assets/Images/music.png'
import Girl1 from '../Assets/Images/girl1.jpg'
import Girl2 from '../Assets/Images/girl2.jpg'
import Girl3 from '../Assets/Images/girl4.jpg'
import MenBanner from '../Assets/Images/men.jpg'
import WomenBanner from '../Assets/Images/women.jpg'
import ShirtImage from '../Assets/Images/shirt.jpg';
import Tshirt from '../Assets/Images/black_shirt.jpg';
import Green from '../Assets/Images/green_shirt.jpg';
import Ladies from '../Assets/Images/ladies_shirt.jpg';
import White from '../Assets/Images/white_shirt.jpg';
import WhiteSecond from '../Assets/Images/white_shirt_second.jpg';
import Bag1 from '../Assets/Images/bag1.jpg';
import Bag2 from '../Assets/Images/bag2.jpg';
import Bag3 from '../Assets/Images/bag3.jpg';
import Bag4 from '../Assets/Images/bag4.jpg';
import Cart from './Cart';
import Modal  from 'react-native-modal';
import I18n from 'react-native-i18n';
import ar from '../I18n/ar';
import en from '../I18n/en';

export default class HomeArabic extends Component {

  state={
    isModalVisible: false,
    HeartColor1:"silver",
    HeartColor2:"silver",
    HeartColor3:"silver",
    Lang:"ar"
  }

  name = "HomeMajer"

  static navigationOptions={
    drawerLabel: "الصفحة الرئيسية"
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


  HeartColor1 = () =>{
    if(this.state.HeartColor1 == "silver")
    {
      this.setState({
        HeartColor1:"red"
      })
    }
    else{
      this.setState({
        HeartColor1:"silver"
      })
    }
  }

  HeartColor2= () =>{
    if(this.state.HeartColor2 == "silver")
    {
      this.setState({
        HeartColor2:"red"
      })
    }
    else{
      this.setState({
        HeartColor2:"silver"
      })
    }
  }

  HeartColor3 = () =>{
    if(this.state.HeartColor3 == "silver")
    {
      this.setState({
        HeartColor3:"red"
      })
    }
    else{
      this.setState({
        HeartColor3:"silver"
      })
    }
  }

  render() {

    I18n.fallbacks = true;
    I18n.locale = this.state.Lang;
    I18n.translations = {
      ar,
      en
    };


    return (
     <View style={{flex:1,backgroundColor: "white",}}>
       {/* Header Start */}
        <View style={style.Header}>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
          }}>
           <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
            <Icon name="th-large" type="FontAwesome" />
          </TouchableOpacity>
          </View>
          <View style={{
            alignItems:"flex-end",
            margin:10,
            flexGrow:1
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Icon name="align-left" type="FontAwesome" />
          </TouchableOpacity>
          </View>
        </View>
        {/* header End */}

        {/* Body start */}
          <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{marginLeft:10,marginTop:30}}>
                <Image source={Logo} style={{height:45,width:120}} />
              </View>
              {/* Three image slider  */}
              <ScrollView horizontal={true} style={{marginLeft:10,marginTop:30}} showsHorizontalScrollIndicator={false}>
                  <View>
                    <TouchableOpacity style={{alignItems: 'center',}} onPress={() => this.props.navigation.navigate('Item',{Picture:Girl1,Lang:this.state.Lang})} activeOpacity={0.8}>
                      <ImageBackground source={Girl1} style={{width:250,height:250,alignItems:"flex-start"}}>
                        <View style={{alignItems:"flex-end",width:"99%"}}>
                          <TouchableOpacity onPress={this.HeartColor1}>
                            <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.HeartColor1}} />
                          </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'flex-end',height:"90%",width:240,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                          <Text style={{fontSize:20,color:'black',fontWeight:"bold",marginLeft:5}}>{I18n.t('Slitch')}</Text>
                          <Text style={{fontSize:15,color:'black',marginLeft:5,marginBottom:5}}>$88.0</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Girl2,Lang:this.state.Lang})} style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <ImageBackground source={Girl2} style={{width:250,height:250,alignItems:"flex-start"}}>
                        <View style={{alignItems:"flex-end",width:"99%"}}>
                          <TouchableOpacity onPress={this.HeartColor2}>
                            <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.HeartColor2}} />
                          </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'flex-end',height:"90%",width:240,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                          <Text style={{fontSize:20,color:'black',fontWeight:"bold",marginLeft:5}}>{I18n.t('Slitch')}</Text>
                          <Text style={{fontSize:15,color:'black',marginLeft:5,marginBottom:5}}>$88.0</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Girl3,Lang:this.state.Lang})} style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <ImageBackground source={Girl3} style={{width:250,height:250,alignItems:"flex-start"}}>
                        <View style={{alignItems:"flex-end",width:"99%"}}>
                          <TouchableOpacity onPress={this.HeartColor3}>
                            <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.HeartColor3}} />
                          </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'flex-end',height:"90%",width:240,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                          <Text style={{fontSize:20,color:'black',fontWeight:"bold",marginLeft:5}}>{I18n.t('Slitch')}</Text>
                          <Text style={{fontSize:15,color:'black',marginLeft:5,marginBottom:5}}>$88.0</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>  
                  </View>
              </ScrollView>
              {/* three image slider ends */}
              <ScrollView horizontal={true} style={{marginLeft:10,marginTop:20}} showsHorizontalScrollIndicator={false}>
                  <View>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={Short} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t('Men')}</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={Shirt} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t('Tshirt')}</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={Underwear} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t('Cloth')}</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={GirlDress} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t('dress')}</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={Socks} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t('poster')}</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={Shoes} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t('singles')}</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={Music} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t('music')}</Text>
                    </TouchableOpacity>  
                  </View>
              </ScrollView>

                {/* after icons */}

              

          {/* after three images slider */}

              <View style={{marginTop:50}}>
                  <View>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <Image source={MenBanner} style={{width:"90%", height:100,borderRadius:10}} />
                      </TouchableOpacity>
                  </View>
                  <View style={{marginTop:20}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <Image source={WomenBanner} style={{width:"90%", height:100,borderRadius:10}} />
                      </TouchableOpacity>
                  </View>
              </View>

              {/* after 2 banners */}
              <View style={{flexDirection:'row',width:'100%',margin:20}}>
              <View style={{width:"70%",alignItems:"flex-start"}}>
                <Text style={{fontSize:20,color:"black"}}>{I18n.t('Feature_Products')}</Text>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('TwoColumn',{Lang:this.state.Lang})} style={{width:"20%",alignItems:"flex-end",justifyContent: 'center',}}>
                <Text style={{fontSize:10,color:"black",justifyContent: 'center'}}>{I18n.t('show_all')} &#x3e;</Text>
              </TouchableOpacity>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:ShirtImage,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={ShirtImage} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Bermuda_shorts')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Green,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Green} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Bermuda_shorts')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:White,Lang:this.state.Lang})} style={{alignItems: 'center',marginLeft:10,marginTop:10}}>
                    <Image source={White} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Bermuda_shorts')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:WhiteSecond,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={WhiteSecond} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Bermuda_shorts')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Tshirt,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Tshirt} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Bermuda_shorts')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Ladies,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Ladies} style={{width:150, height:200}} />
                    <View style={{width:140,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Bermuda_shorts')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </TouchableOpacity>
              </ScrollView>

            {/* After feature product slider */}

            <View style={{flexDirection:'row',width:'100%',margin:20}}>
              <View style={{width:"70%",alignItems:"flex-start"}}>
                <Text style={{fontSize:20,color:"black"}}>{I18n.t('Bags_collection')}</Text>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ThreeColumn',{Lang:this.state.Lang})} style={{width:"20%",alignItems:"flex-end",justifyContent: 'center',}}>
                <Text style={{justifyContent:"center"}}>
                <Text style={{fontSize:10,color:"black"}}>{I18n.t('show_all')} &#x3e;</Text>
                </Text>
              </TouchableOpacity>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Bag1,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Bag1} style={{width:200, height:150}} />
                    <View style={{width:190,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Bermuda_shorts')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Bag2,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Bag2} style={{width:200, height:150}} />
                    <View style={{width:190,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Bermuda_shorts')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Bag3,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Bag3} style={{width:200, height:150}} />
                    <View style={{width:190,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Bermuda_shorts')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Bag4,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Bag4} style={{width:200, height:150}} />
                    <View style={{width:190,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Bermuda_shorts')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </TouchableOpacity>
              </ScrollView>

          </ScrollView>
        {/* Body end */}

        {/* Modal starts */} 
        <Modal style={style.BottomModal} onBackButtonPress={() => {this.setState({isModalVisible: false})}} animationInTiming={700} animationOutTiming={700} backdropOpacity={0.5} isVisible={this.state.isModalVisible}>
            <View style={{backgroundColor: "white",marginTop:10,marginLeft:10,marginRight:10,borderRadius:10}}>
              <View style={{alignItems:"flex-end",marginTop:10}}>
                <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
                   <Icon name="times" type="FontAwesome" style={{marginRight: 20,}}/>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80}}>
                  <TouchableOpacity style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,backgroundColor: "#42C2BF",justifyContent: 'center',}}>
                    <View>
                      <Icon style={{fontSize:40}} name="view-agenda" type="MaterialIcons" />                      
                    </View>
                    <Text style={{color:"black"}}>{I18n.t('Horizontal')}</Text>
                  </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ListView',{Lang:this.state.Lang})} style={{width:"40%",alignItems: 'center',justifyContent: 'center',height:70,borderRadius:10,}}>
                    <View>
                      <Icon name="view-list" type="MaterialIcons" style={{fontSize:40}}/>
                    </View>
                    <Text style={{color:"black"}}>{I18n.t('List')}</Text>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('TwoColumn',{Lang:this.state.Lang})} style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,justifyContent: 'center',}}>
                    <View>
                      <Icon style={{fontSize:40}} name="th-large" type="FontAwesome" />                      
                    </View>
                    <Text style={{color:"black"}}>{I18n.t('Two_Column')}</Text>
                  </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ThreeColumn',{Lang:this.state.Lang})} style={{width:"40%",alignItems: 'center',justifyContent: 'center',height:70,borderRadius:10,}}>
                    <View>
                      <Icon name="view-column" type="MaterialIcons" style={{fontSize:40}}/>
                    </View>
                    <Text style={{color:"black"}}>{I18n.t('Three_Column')}</Text>
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
        {/* Modal ends */} 

        {/* Footer Tab */}
        <Footer>
          <FooterTab style={{backgroundColor: "white",}}>
            <Button onPress={() => this.props.navigation.navigate('Home',{Lang:this.state.Lang})}>
              <Icon name="home" style={{color:"#42C2BF"}} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Categories',{Lang:this.state.Lang})}>
              <Icon name="th-large" type="FontAwesome" style={{color:"gainsboro"}}/>
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
  },
  BottomModal: {
    justifyContent: "flex-end",
    height:"50%",
    margin: 0,
  },
})