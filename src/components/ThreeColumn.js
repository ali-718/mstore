import React, { Component } from 'react'
import {Platform,TextInput, StyleSheet, Text, View,Image, BackHandler,TouchableOpacity,SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import {Header,Button,Input,Left,Body,Right,Icon,Footer,FooterTab} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Shorts from '../Assets/Images/bermuda_short.jpg';
import Shirt from '../Assets/Images/shirt.jpg';
import Tshirt from '../Assets/Images/black_shirt.jpg';
import Green from '../Assets/Images/green_shirt.jpg';
import Ladies from '../Assets/Images/ladies_shirt.jpg';
import White from '../Assets/Images/white_shirt.jpg';
import WhiteSecond from '../Assets/Images/white_shirt_second.jpg';
import Shoes from '../Assets/Images/shoes_second.jpg';
import Lawn from '../Assets/Images/women_lawn.jpg';
import Girl3 from '../Assets/Images/girl4.jpg';
import Modal from "react-native-modal";
import Bag1 from '../Assets/Images/bag1.jpg';
import Bag2 from '../Assets/Images/bag2.jpg';
import Bag3 from '../Assets/Images/bag3.jpg';
import I18n from 'react-native-i18n';
import ar from '../I18n/ar';
import en from '../I18n/en';

export default class ThreeColumn extends Component {
  state={
    searchModal:false,
    Lang:this.props.navigation.getParam('Lang','en'),
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
    return true
    }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }
  
  static navigationOptions = {
    drawerLabel:() => null
  }

  render() {

    I18n.fallbacks = true;
    I18n.locale = this.state.Lang;
    I18n.translations = {
      ar,
      en
    };

    return (
       <SafeAreaView style={{flex:1, backgroundColor: "white",}}>
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
          <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
            <Icon name="th-large" type="FontAwesome" />
          </TouchableOpacity>
          </View>
        </View>
        {/* header End */}
       <ScrollView>
                 <View style={{width:"100%"}}>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Girl3,Lang:this.state.Lang})} style={{alignItems: 'center'}} activeOpacity={0.8}>
                    <ImageBackground source={Girl3} style={{width:"99%",height:350,alignItems:"center"}}>
                     <View style={{justifyContent: 'flex-end',height:"90%",width:"90%",alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                       <Text style={{fontSize:20,color:'black',fontWeight:"bold",marginLeft:5}}>{I18n.t('Slitch')}</Text>
                       <Text style={{fontSize:15,color:'black',marginLeft:5,marginBottom:5}}>$88.0</Text>
                       </View>
                    </ImageBackground>
                   </TouchableOpacity>  
                </View>
         <Grid>
            <Col style={style.ColumnStyle}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Shorts,Lang:this.state.Lang})} style={{alignItems: 'center',}}>
                  <Image source={Shorts} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Bermuda_shorts')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
              </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Shirt,Lang:this.state.Lang})}>
                  <Image source={Shirt} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Mens_Shirt')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$18.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Tshirt,Lang:this.state.Lang})}>
                  <Image source={Tshirt} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Lastree_Limited')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>  
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Tshirt,Lang:this.state.Lang})}>
                  <Image source={Tshirt} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Lastree_Limited')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>  
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Green,Lang:this.state.Lang})}>
                  <Image source={Green} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Saint_Seiya')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Ladies,Lang:this.state.Lang})}>
                  <Image source={Ladies} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Ladies_Long')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Ladies,Lang:this.state.Lang})}>
                  <Image source={Ladies} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Ladies_Long')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:White,Lang:this.state.Lang})}>
                  <Image source={White} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Cloth_Design')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>      
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:WhiteSecond,Lang:this.state.Lang})}>
                  <Image source={WhiteSecond} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Mens_Chemise')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:WhiteSecond,Lang:this.state.Lang})}>
                  <Image source={WhiteSecond} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Mens_Chemise')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Shoes,Lang:this.state.Lang})}>
                  <Image source={Shoes} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Crocodile_Leather')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Bag1,Lang:this.state.Lang})}>
                  <Image source={Bag1} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Orange_Ladies')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Bag1,Lang:this.state.Lang})}>
                  <Image source={Bag1} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Orange_Ladies')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Bag2,Lang:this.state.Lang})}>
                  <Image source={Bag2} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Grey_Ladies')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Bag3,Lang:this.state.Lang})}>
                  <Image source={Bag3} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Orange_Ladies')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
          <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:Bag3,Lang:this.state.Lang})}>
                  <Image source={Bag3} style={{width:100, height:150}} />
                      <View style={{width:90,marginTop:5,alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"}}>
                        <Text style={style.TextStyle}>{I18n.t('Grey_Ladies')}</Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
          </Grid>
        </ScrollView>

        {/* Modal starts */} 
        <Modal style={style.BottomModal} onBackButtonPress={() => {this.setState({isModalVisible: false})}} animationInTiming={700} animationOutTiming={700} backdropOpacity={0.5} isVisible={this.state.isModalVisible}>
            <View style={{backgroundColor: "white",marginTop:10,marginLeft:10,marginRight:10,borderRadius:10}}>
              <View style={{alignItems:"flex-end",marginTop:10}}>
                <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
                   <Icon name="times" type="FontAwesome" style={{marginRight: 20,}}/>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Home',{Lang:this.state.Lang})} style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,justifyContent: 'center',}}>
                    <View>
                      <Icon style={{fontSize:40}} name="view-agenda" type="MaterialIcons" />                      
                    </View>
                    <Text style={{color:"black"}}>Horizontal</Text>
                  </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ListView',{Lang:this.state.Lang})} style={{width:"40%",alignItems: 'center',justifyContent: 'center',height:70,borderRadius:10}}>
                    <View>
                      <Icon name="view-list" type="MaterialIcons" style={{fontSize:40}}/>
                    </View>
                    <Text style={{color:"black"}}>List</Text>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('TwoColumn',{Lang:this.state.Lang})} style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,justifyContent: 'center',}}>
                    <View>
                      <Icon style={{fontSize:40}} name="th-large" type="FontAwesome" />                      
                    </View>
                    <Text style={{color:"black"}}>Two Column</Text>
                  </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ThreeColumn',{Lang:this.state.Lang})} style={{width:"40%",alignItems: 'center',justifyContent: 'center',height:70,borderRadius:10,backgroundColor: "#42C2BF"}}>
                    <View>
                      <Icon name="view-column" type="MaterialIcons" style={{fontSize:40}}/>
                    </View>
                    <Text style={{color:"black"}}>Three Column</Text>
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
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  ViewDisplay:{
    backgroundColor: "white",
     width:90,
     marginTop:5,
     alignItems:I18n.locale == 'ar'? "flex-end":"flex-start"
    },
    ColumnStyle:{
      height: 250,
      alignItems:"center",
      justifyContent: 'center',
    },
    TextStyle:{
      fontWeight:"bold",
      color:"black", 
      alignContent: 'flex-start',
      fontSize:11
    },
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
