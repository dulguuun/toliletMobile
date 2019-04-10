import React, { Component } from 'react'
import { 
    ScrollView, 
    Text, 
    Image, 
    View,
    AsyncStorage,
    TouchableHighlight,
    StyleSheet,
  } from 'react-native'
import Storage from 'react-native-storage';
const storage = new Storage({
  size: 1000,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  storageBackend: AsyncStorage,
  sync: {
  }
});
class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      definition: '',
      timestamp: '',
      auth_token: '',
    }
  }
    
  componentWillMount = () =>{
    let token = '';
    storage.load({
      key:'userData',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        someFlag: true
      }
    }).then(ret => {
      this.setState({
        name: ret.name,
        email: ret.email,
        // definition: ret.definition,
        timestamp: ret.timestamp,
        auth_token: ret.auth_token
      });
      console.log('url2 '+ token);
      console.log('token2 '+ this.state.auth_token);
    }).catch(err => {
      console.warn(err.message);
      switch (err.name) {
        case 'NotFoundError':
          break;
        case 'ExpiredError':
          break;
      }
    });

    // token = this.state.name;
    // let url = 'http://192.168.1.7:8000/api/products?token='+token+'';
    // console.log('url1 '+ token);
    // console.log('token1 '+ this.state.auth_token);
  }

  render () {
    return (
      <View style={Loginstyles.container}>
        <View>
          <Text style={Loginstyles.headerText}>{this.state.name}</Text>
        </View>

        <View style={Loginstyles.inputContainer1}>
          <TouchableHighlight style={[Loginstyles.facebook, Loginstyles.loginButton]} 
            onPress={() => this.props.navigation.navigate('FaCheck')}>
            <Text style={Loginstyles.loginText}>Загвар шалгах</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[Loginstyles.facebook, Loginstyles.loginButton]} 
            onPress={() => this.props.navigation.navigate('Negotation')}>
            {/* <Image style={Loginstyles.fingerIcon} source={Images.fingerPrint}/> */}
            <Text style={Loginstyles.loginText}>Хэлцэл</Text>
          </TouchableHighlight>
        </View>

        <View style={Loginstyles.inputContainer1}>
          <TouchableHighlight style={[Loginstyles.facebook, Loginstyles.loginButton]} 
            onPress={() => this.props.navigation.navigate('FaCheck')}>
            <Text style={Loginstyles.loginText}>Хяналтын самбар</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[Loginstyles.facebook, Loginstyles.loginButton]} 
            onPress={() => this.props.navigation.navigate('FaCheck')}>
            {/* <Image style={Loginstyles.fingerIcon} source={Images.fingerPrint}/> */}
            <Text style={Loginstyles.loginText}>Мэдээллийн самбар</Text>
          </TouchableHighlight>
        </View>

        <View style={Loginstyles.inputContainer1}>
          <TouchableHighlight style={[Loginstyles.facebook, Loginstyles.loginButton]} 
            onPress={() => this.props.navigation.navigate('FaCheck')}>
            <Text style={Loginstyles.loginText}>Сэтгэгдэл</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[Loginstyles.facebook, Loginstyles.loginButton]} 
            onPress={() => this.props.navigation.navigate('FaCheck')}>
            {/* <Image style={Loginstyles.fingerIcon} source={Images.fingerPrint}/> */}
            <Text style={Loginstyles.loginText}>Тусламж</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const Loginstyles = StyleSheet.create({
  container: {
    flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  headerText:{
      fontSize:30,
      color:'black',
      alignItems:'center',
      padding:20,
      backgroundColor: 'gray',
      marginBottom:10
  },
  inputContainer1: {
      flexDirection: 'row',
      flex: 1,
  },
  facebook: {
    height:120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    marginLeft:10,
    marginRight:10,
    flex:1
  //   borderRadius:30,
  },
  fingerPrint: {
    height:45,
    marginBottom:20,
    width:50,
    borderRadius:30,
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

export default Dashboard