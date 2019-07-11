  import React, { Component } from 'react';
  import { View, Text, ScrollView, TouchableOpacity,Switch,Image,StyleSheet,BackHandler } from 'react-native';
  import { Container, Header, Content, Footer, FooterTab, Button, Icon,Drawer } from 'native-base';
  import Person from '../Assets/Images/Account_Person.png';
  import Logo from '../Assets/Images/logo.png';
  import I18n from 'react-native-i18n';
  import ar from '../I18n/ar';
  import en from '../I18n/en';
  import Modal from "react-native-modal";

  export default class AccountComponent extends Component {

    state={
      switch1:false,
      switchLang:false,
      Wishlist:0,
      Lang:"en",
      isModalVisible:false,
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

    SwitchClick2 = () => {
      this.setState({
        switch1:!this.state.switch1
      })
    }

    render() {

      I18n.fallbacks = true;
      I18n.locale = this.state.Lang;
      I18n.translations = {
        ar,
        en
      };

      const Account_English = (<ScrollView>
        <View style={{width:"100%",alignItems:"center",backgroundColor: "white",}}>
          <View style={{flexDirection:"row",width:'90%',height:130,alignItems:"center",backgroundColor: "white",}}>
              <View style={{marginLeft:10,width:80,}}>
                <Image style={{width:80,height:80,}} source={Person} />
              </View>
              <View style={{marginLeft:10,width:"60%",height:100,justifyContent: 'center',}}>
                <Text style={{color:"black",fontSize:30,fontWeight:"bold"}}>
                {I18n.t('Guest')}
                </Text>
                <TouchableOpacity style={{marginTop:20}} onPress={() => this.props.navigation.navigate('Login',{Lang:this.state.Lang})}>
                    <Text style={{fontSize:12,}}>
                    {I18n.t('Login')}
                    </Text>
                </TouchableOpacity> 
              </View>
          </View>
        </View>
        <TouchableOpacity style={{width:"100%",alignItems:"center",marginTop:10, height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
          <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
            <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
              <Text style={{fontSize:17}}>{I18n.t('Wish_List')} ({this.state.Wishlist})</Text>
            </View>
            <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
              <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,}} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
          <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
            <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
              <Text style={{fontSize:17}}>{I18n.t('Currency')}</Text>
            </View>
            <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
            <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,}} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({isModalVisible:!this.state.isModalVisible})} style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
          <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
            <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
              <Text style={{fontSize:17}}>{I18n.t('Languages')}</Text>
            </View>
            <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
            <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,}} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
          <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
            <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
              <Text style={{fontSize:17}}>{I18n.t('Push_Notifications')}</Text>
            </View>
            <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
            <Switch value={this.state.switch1} onValueChange={this.SwitchClick2}/>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact')} style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
          <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
            <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
              <Text style={{fontSize:17}}>{I18n.t('Contact_us')}</Text>
            </View>
            <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
              <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,}} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Policy')} style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
          <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
            <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
              <Text style={{fontSize:17}}>{I18n.t('Privacy_Policies')}</Text>
            </View>
            <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
              <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,}} />
            </View>
          </View>
        </TouchableOpacity>
    </ScrollView>
    )

    const Account_Arabic = ( <ScrollView>
      <View style={{width:"100%",alignItems:"center",backgroundColor: "white",}}>
    <View style={{flexDirection:"row",width:'90%',height:130,alignItems:"center",backgroundColor: "white",}}>
        <View style={{marginRight:10,width:"60%",height:100,justifyContent: 'center',}}>
          <Text style={{color:"black",fontSize:30,fontWeight:"bold"}}>
          {I18n.t('Guest')}
          </Text>
          <TouchableOpacity style={{marginTop:20}} onPress={() => this.props.navigation.navigate('Login',{Lang:this.state.Lang})}>
              <Text style={{fontSize:12,}}>
              {I18n.t('Login')}
              </Text>
          </TouchableOpacity> 
        </View>
        <View style={{marginLeft:10,width:80,}}>
          <Image style={{width:80,height:80,}} source={Person} />
        </View>
    </View>
  </View>
  <TouchableOpacity style={{width:"100%",alignItems:"center",marginTop:10, height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
    <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
      <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center',}}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" style={{fontSize: 20,}} />
      </View>
      <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center'}}>
        <Text style={{fontSize:17}}>{I18n.t('Wish_List')} ({this.state.Wishlist})</Text>
      </View>
    </View>
  </TouchableOpacity>
  <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
    <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
      <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center',}}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" style={{fontSize: 20,}} />
      </View>
      <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center'}}>
        <Text style={{fontSize:17}}>{I18n.t('Currency')}</Text>
      </View>
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => this.setState({isModalVisible:!this.state.isModalVisible})} style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
    <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
      <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center',}}>
      <Icon name="keyboard-arrow-left" type="MaterialIcons" style={{fontSize: 20,}} />
      </View>
      <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center'}}>
        <Text style={{fontSize:17}}>{I18n.t('Languages')}</Text>
      </View>
    </View>
  </TouchableOpacity>
  <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
    <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
      <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center',}}>
      <Switch value={this.state.switch1} onValueChange={this.SwitchClick2}/>
      </View>
      <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center'}}>
        <Text style={{fontSize:17}}>{I18n.t('Push_Notifications')}</Text>
      </View>
    </View>
  </TouchableOpacity>
  <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
    <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
      <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center',}}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" style={{fontSize: 20,}} />
      </View>
      <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center'}}>
        <Text style={{fontSize:17}}>{I18n.t('Contact_us')}</Text>
      </View>
    </View>
  </TouchableOpacity>
  <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
    <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
      <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center',}}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" style={{fontSize: 20,}} />
      </View>
      <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center'}}>
        <Text style={{fontSize:17}}>{I18n.t('Privacy_Policies')}</Text>
      </View>
    </View>
  </TouchableOpacity>
  </ScrollView>
  )

      return (
          <View style={{flex:1,width:"100%",backgroundColor: "white",}}>
          {/* Header */}
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
              alignItems:"flex-start",
              margin:10,
              flexGrow: 1,
              justifyContent: 'center',
            }}>
                <Image source={Logo} style={{height:40,width:110}} />
            </View>
          </View>
          {/* Header ends here */}
            {/* Body starts */}
          
            {/* Body ends here */}
                {this.state.Lang == "ar" ? Account_Arabic : Account_English}
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
                <Icon name="user" type="FontAwesome" style={{color:"#42C2BF"}} />
              </Button>
            </FooterTab>
          </Footer>


          {/* Modal starts */}
        <Modal style={{justifyContent:"flex-end",height:"50%",margin: 0,}} onBackButtonPress={() => {this.setState({isModalVisible: false})}} animationInTiming={700} animationOutTiming={700} backdropOpacity={0.5} isVisible={this.state.isModalVisible}>
              <View style={{backgroundColor: "white",marginTop:10,marginLeft:10,marginRight:10,borderRadius:10}}>
                  <View style={{alignItems:"flex-end",marginTop:10}}>
                      <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
                      <Icon name="times" type="FontAwesome" style={{marginRight: 20,}}/>
                      </TouchableOpacity>
                  </View>
                  <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80,backgroundColor: "#42C2BF"}}>
                      <TouchableOpacity onPress={() => this.setState({isModalVisible:!this.state.isModalVisible})} style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,justifyContent: 'center',}}>
                          <Text style={{color:"black"}}>English</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80}}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Index',{Lang:"ar"})} style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,justifyContent: 'center'}}>
                          <Text style={{color:"black"}}>عربى</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </Modal>
          {/* Modal ends */} 
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