import React, { Component } from 'react'
import { 
    ScrollView, 
    Text, 
    Image, 
    View, 
    Button, 
    TextInput,
    TouchableHighlight, 
    StyleSheet,
    Alert,
    AsyncStorage
  } from 'react-native'
import Storage from 'react-native-storage';
import { Images } from '../../Themes'
import axios from 'axios'

const storage = new Storage({
  size: 1000,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  storageBackend: AsyncStorage,
  sync: {
  }
});

class LoginForm extends Component {

  constructor(props){
    super(props)
    this._onLoginFunction = this._onLoginFunction.bind(this)
    this.state = {
      email   : '',
      password: '',
      isLoggedIn: false,
      userData: {}
    }
  }

  // componentWillMount = () => {}

  _onLoginFunction = () => {
	var form = new FormData();
    form.append("email", this.state.email);
    form.append("password", this.state.password);

    axios.post('http://124.158.124.60:8080/toilet/api/user/login',form)
      .then(response => {
        console.log('Response ' + JSON.stringify(response.data))
        console.log('Response ' + response.data)
        if(response.data.success){
          let userData = {
            name: response.data.data.name,
            id: response.data.data.id,
            email: response.data.data.email,
            // definition: response.data.data.definition,
            auth_token: response.data.data.auth_token,
            timestamp: new Date().toString()
          };
          let appState = {
            isLoggedIn: true,
            userData: userData
          };
          storage.save({
            key: 'userData',
            data:userData,
            expires: 1000*3600
          });

          this.setState({
            isLoggedIn: appState.isLoggedIn,
            user: appState.user
          });
        }
        console.log('isCheck ' + this.state.isLoggedIn)
      }).catch(error => {
          console.log(error);
      });
	  
    if(this.state.isLoggedIn){
      this.props.navigation.navigate('Dashboard')
    }else {
      Alert.alert("Алдаа", "Хэрэглэгчийн мэйл/нууц үг буруу байна!");
    }
  }

  render() {
    return (
      <View style={Loginstyles.container}>
        <View style={Loginstyles.inputContainer}>
          <Image style={Loginstyles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={Loginstyles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={Loginstyles.inputContainer}>
          <Image style={Loginstyles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={Loginstyles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[Loginstyles.buttonContainer, Loginstyles.loginButton]} 
            onPress={(e) => this._onLoginFunction(e)}>
          <Text style={Loginstyles.loginText}>Нэвтрэх</Text>
        </TouchableHighlight>

        <View style={Loginstyles.inputContainer1}>
          <TouchableHighlight style={[Loginstyles.facebook, Loginstyles.loginButton]} 
              onPress={() => this.onClickListener('facebook_login')}>
            <Text style={Loginstyles.loginText}>Facebook нэвтрэх</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[Loginstyles.fingerPrint]} 
              onPress={() => this.onClickListener('login')}>
            <Image style={Loginstyles.fingerIcon} source={Images.fingerPrint}/>
            {/* <Text style={Loginstyles.loginText}>Хур</Text> */}
          </TouchableHighlight>
        </View>

        {/* <TouchableHighlight style={Loginstyles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Нууц үгээ мартсан?</Text>
        </TouchableHighlight> */}

        <TouchableHighlight style={Loginstyles.buttonContainer} onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Бүртгүүлэх</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const Loginstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputContainer1: {
    width:250,
    height:45,
    marginBottom:15,
    flexDirection: 'row',
    alignItems:'center',
},
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:40,
    height:40,
    marginLeft:15,
    justifyContent: 'center',
  },
  fingerIcon:{
    width:40,
    height:40,
    marginLeft:10,
    justifyContent: 'center',
    // backgroundColor: 'black',
    borderRadius: 30,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  facebook: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:200,
    borderRadius:30,
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

export default LoginForm