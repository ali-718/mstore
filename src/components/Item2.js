import React, { Component } from 'react';
import {Platform,TextInput, StyleSheet,Text, View,Image,TouchableOpacity,SafeAreaView,BackHandler,Dimensions,ScrollView,ImageBackground} from 'react-native';
import {Header,Button,Input,Left,Body,Right,Icon,Footer,FooterTab,Container,Tabs,TabHeading,Tab} from 'native-base'
import Modal from "react-native-modal";
import ShirtImage from '../Assets/Images/shirt.jpg';
import Tshirt from '../Assets/Images/black_shirt.jpg';
import Green from '../Assets/Images/green_shirt.jpg';
import Ladies from '../Assets/Images/ladies_shirt.jpg';
import White from '../Assets/Images/white_shirt.jpg';
import WhiteSecond from '../Assets/Images/white_shirt_second.jpg';
import AutoHeightImage from 'react-native-auto-height-image';
import I18n from 'react-native-i18n';
import ar from '../I18n/ar';
import en from '../I18n/en';


export default class Item2 extends Component {

    state = {
        HeartColor:"grey",
        isModalVisible:false,
        ImageHeight:"100%",
        Lang:this.props.navigation.getParam('Lang','en'),
    }
    static navigationOptions = {
        drawerLabel:() => null
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
  
    HeartColor = () =>{
        if(this.state.HeartColor == "grey")
        {
          this.setState({
            HeartColor:"red"
          })
        }
        else{
          this.setState({
            HeartColor:"grey"
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

    const  Picture = this.props.navigation.getParam('Picture')

    return (
      <View style={{flex:1,backgroundColor: "white",}}>
         {/* Header Start */}
         <View style={style.Header}>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Icon name="align-left" type="FontAwesome" />
          </TouchableOpacity>
          </View>
          <View style={{
            alignItems:"flex-end",
            margin:10,
            flexGrow:1
          }}>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart',{Lang:this.state.Lang})}>
                <Icon name="cart" />
            </TouchableOpacity>
          </View>  
          </View>
        </View>
        {/* header End */}

           {/* Modal starts */} 
        <Modal style={{width:"100%",height:"100%"}} onBackButtonPress={() => {this.setState({isModalVisible: false})}} animationInTiming={700} animationOutTiming={700} backdropOpacity={0.5} isVisible={this.state.isModalVisible}>
            <View style={{backgroundColor: "white",marginTop:10,marginLeft:-20,marginBottom:10,borderRadius:10,width:"100%"}}>
              <View style={{width:"100%",alignItems:"flex-end",marginTop:10}}>
                <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
                   <Icon name="times" type="FontAwesome" style={{marginRight: 20,}}/>
                </TouchableOpacity>
              </View>
              <AutoHeightImage width={Dimensions.get('window').width} source={Picture} />
            </View>
        </Modal>
        {/* Modal ends */}

        {/* Body starts */}
        <ScrollView style={{flex:1,width:"100%"}}>
            <View style={{width:'100%',alignItems:"center",flex:1}}>
                <View style={{width:"100%"}}>
                   <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}} style={{alignItems: 'center',}} activeOpacity={0.8}>
                    <ImageBackground  source={Picture} style={{width:"98%",height:250,alignItems:"flex-start"}}>
                    </ImageBackground>
                   </TouchableOpacity>  
                </View>
                <View style={{alignItems:"center",marginTop: 20,}}>
                    <Text style={{fontSize:20,color:"black"}}>
                    {I18n.t('Tapestry_Shopper')}
                    </Text>
                    <Text style={{fontSize:15,color:"black",marginTop:10}}>
                        $38.00
                    </Text>
                </View>
                <View style={{flexDirection:"row",marginTop:10,justifyContent: 'center',}}>
                    <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                    <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                    <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                    <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                    <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                    <Text style={{color:"black"}}> (1) {I18n.t('Reviews')}</Text>
                </View>
            </View>
            <View>
                <Tabs style={{marginTop:10}} tabBarActiveTextColor="rgb(0,0,0)" tabBarUnderlineStyle={{backgroundColor:'rgb(68, 195, 192)'}}>
                <Tab
                    activeTextStyle={{color: 'black', fontWeight: 'bold'}}
                    heading={
                    <TabHeading style={{backgroundColor: 'white'}} >
                    <Text style={{color:'rgb(68, 69, 70)'}}>{I18n.t('Description')}</Text>
                    </TabHeading>
                    }>
                      <ScrollView style={{backgroundColor: "white",}}>
                        <View style={{width:'100%',alignItems: 'center',}}>
                          <View style={{width:"80%",marginTop:20,marginBottom:20}}>
                            <View style={{flexDirection:"row",alignItems: 'center',}}>
                              <Icon name="circle" type="FontAwesome" style={{fontSize:7}} />
                              <Text style={{marginLeft:10,color:"black"}}>{I18n.t('Woven_Cotton')}</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems: 'center',}}>
                              <Icon name="circle" type="FontAwesome" style={{fontSize:7}} />
                              <Text style={{marginLeft:10,color:"black"}}>{I18n.t('Seude_Leather')}</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems: 'center',}}>
                              <Icon name="circle" type="FontAwesome" style={{fontSize:7}} />
                              <Text style={{marginLeft:10,color:"black"}}>{I18n.t('Magnetic_Press')}</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems: 'center',}}>
                              <Icon name="circle" type="FontAwesome" style={{fontSize:7}} />
                              <Text style={{marginLeft:10,color:"black"}}>{I18n.t('Zipped_Pocket')}</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems: 'center',}}>
                              <Icon name="circle" type="FontAwesome" style={{fontSize:7}} />
                              <Text style={{marginLeft:10,color:"black"}}>{I18n.t('Not_Wash')}</Text>
                            </View>
                          </View>
                        </View>
                      </ScrollView>
                </Tab>
                <Tab 
                    heading={ 
                    <TabHeading  style={{backgroundColor: 'white'}}>
                    <Text style={{color:'rgb(68, 69, 70)'}}>{I18n.t('Feature')}</Text>
                    </TabHeading>
                    }>
                    <ScrollView style={{backgroundColor: "white",}}>
                        <View style={{width:'100%',alignItems: 'center',}}>
                          <View style={{width:"90%",marginTop:20,marginBottom:20}}>
                            <Text style={{color:"black"}}>
                            {I18n.t('Lorem_Ipsum')}
                            </Text>
                          </View>
                        </View>
                      </ScrollView>
                </Tab>
                <Tab
                    heading={ 
                    <TabHeading  style={{backgroundColor: 'white'}}>
                    <Text style={{color:'rgb(68, 69, 70)'}}>{I18n.t('Reviews')}</Text>
                    </TabHeading>
                    }>
                     <ScrollView style={{backgroundColor: "white",}}>
                        <View style={{width:'100%',alignItems: 'center',borderBottomWidth:0.7,borderColor:"grey",paddingBottom: 10,}}>
                          <View style={{width:"90%",marginTop:20,marginBottom:20}}>
                            <View>
                              <Text style={{fontSize:17,color:"black",fontWeight:"bold"}}>{I18n.t('Sophia')}</Text>
                              <Text style={{fontSize:13,color:"black",marginTop:10}}>{I18n.t('Amazing')}</Text>
                              <View style={{width:"100%",flexDirection:"row"}}>
                                <View style={{width:"50%",alignItems:"flex-start"}}>
                                <Text style={{fontSize:13,color:"black",marginTop:10}}>{I18n.t('July')}</Text>
                                </View>
                                <View style={{width:"50%",justifyContent:"flex-end",flexDirection:"row",alignItems: 'center',}}>
                                  <Icon name="star" style={{fontSize:15,color:"#fff700"}} />
                                  <Icon name="star" style={{fontSize:15,color:"#fff700"}} />    
                                  <Icon name="star" style={{fontSize:15,color:"#fff700"}} />
                                  <Icon name="star" style={{fontSize:15,color:"#fff700"}} />
                                  <Icon name="star" style={{fontSize:15,color:"#fff700"}} />
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </ScrollView>
                </Tab>
                </Tabs>
            </View>

            {/* You may also like slider */}
            <View style={{flexDirection:'row',width:'100%',margin:20}}>
              <View style={{width:"70%",alignItems:"flex-start"}}>
                <Text style={{fontSize:15,color:"black"}}>{I18n.t('You_Like')}</Text>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('TwoColumn',{Lang:this.state.Lang})} style={{width:"20%",alignItems:"flex-end",justifyContent: 'center',}}>
                <Text style={{fontSize:10,color:"black",justifyContent: 'center'}}>{I18n.t('show_all')} &#x3e;</Text>
              </TouchableOpacity>
              </View>
              <ScrollView style={{marginBottom:10,marginRight:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:ShirtImage,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={ShirtImage} style={{width:100, height:150}} />
                    <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Saint_Seiya')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Green,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={Green} style={{width:100, height:150}} />
                    <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Mens_Shirt')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:White,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                    <Image source={White} style={{width:100, height:150}} />
                    <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t('Mens_Chemise')}</Text>
                      <Text style={{color:"black",fontSize:10}}>$35.00</Text>
                    </View>
                </TouchableOpacity>   
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:WhiteSecond,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}} >
                  <Image source={WhiteSecond} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Mens_Chemise')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Tshirt,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                  <Image source={Tshirt} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Lastree_Limited')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>  
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Ladies,Lang:this.state.Lang})} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
                  <Image source={Ladies} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Ladies_Long')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
              </ScrollView>
        </ScrollView>

                {/* Buy now Tab */}
                <View style={{width:"100%",flexDirection:"row",height:40}}>
                    <View style={{width:"50%",height:40,flexDirection:"row",alignItems:"center"}}>
                        <View style={{flexGrow:1,alignItems:"center"}}>
                            <Icon name="share-alt" type="FontAwesome" style={{fontSize:20,color:"grey"}} />
                        </View>
                        <View style={{flexGrow:1,alignItems:"center"}}>
                            <Icon name="favorite-border" type="MaterialIcons" onPress={this.HeartColor} style={{fontSize:20,color:this.state.HeartColor}}/>
                        </View>
                        <View style={{flexGrow:1,alignItems:"center"}}>
                            <Icon name="cart" style={{fontSize:20,color:"grey"}}/>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} activeOpacity={0.7} style={{width:"50%",backgroundColor:"#42C2BF",height:40,justifyContent: 'center',alignItems: 'center',}}>
                        <Text style={{color:"white",fontWeight:"bold"}}>BUY NOW</Text>
                    </TouchableOpacity>
                </View>
                {/* Buy now Tab ends */}

                {/* Footer Tab */}
                <Footer>
                    <FooterTab style={{backgroundColor: "white",}}>
                        <Button onPress={() => this.props.navigation.navigate('Home',{Lang:this.state.Lang})}>
                        <Icon name="home" style={{color:"gainsboro"}} />
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
      TextStyle:{
        fontWeight:"bold",
        color:"black", 
        alignContent: 'flex-start',
        fontSize:11
      },
})

