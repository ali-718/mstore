import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity,ScrollView,BackHandler } from 'react-native';
import Zaaviyah from '../Assets/Images/company.png'
import { Icon } from 'native-base';
import Logo from '../Assets/Images/logo.png';

export default class PolicyArabic extends Component {

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
        <View style={{alignItems:"center"}}>
           <Text style={{color:"black",margin:20}}>
           تم تصميم هذه الصفحة لمساعدة الشركات ، وخاصة BBB Accredited Businesses ، على إنشاء إشعار خصوصية عبر الإنترنت للاستخدام على الإنترنت. يجب أن يستند إشعار الخصوصية إلى العناصر الخمسة التالية:

إشعار (ما هي المعلومات الشخصية التي يتم جمعها على الموقع)
الاختيار (ما هي الخيارات التي لدى العميل حول كيفية / ما إذا كان يتم جمع البيانات الشخصية واستخدامها)
الوصول (كيف يمكن للعميل معرفة البيانات التي تم جمعها وتغييرها / تصحيحها إذا لزم الأمر)
الأمان (حدد كيف يتم تخزين / حماية أي بيانات يتم تجميعها)
جبر (ما يمكن للعميل القيام به إذا لم يتم الوفاء بسياسة الخصوصية)
أيا كان الإشعار النهائي الذي تقوم بتطويره ، فهو متروك لك ، وسوف تتحمل مسؤولية الحفاظ عليه. لا يوصي مكتب الأعمال الأفضل بأي مجموعة واحدة من ممارسات الخصوصية أو أي إشعار خصوصية واحد.

يوجد أدناه نموذج إشعار خصوصية قد ترغب في استخدامه كدليل لإشعار الخصوصية الخاص بك. لاحظ أن هناك مكانًا لاسم شركتك أو عنوان URL الخاص بها في الفقرة الأولى ومكانًا لرقم هاتفك وعنوان بريدك الإلكتروني في الفقرة الأخيرة. يرجى التأكد من تخصيص هذه. لا تقم ببساطة بقص هذه السياسة ولصقها كما هي.
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
