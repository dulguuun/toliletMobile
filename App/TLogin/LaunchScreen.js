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
  } from 'react-native'
import Login from './LoginScreen/LoginForm'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Images } from '../Themes'
import axios from 'axios'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {

  constructor(){
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
   };
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          
          <View style={styles.section} >
            {/* <Image source={Images.ready} /> */}
            <Text style={styles.sectionText} >
              Жорлонгоо
            </Text>
            <Text style={styles.sectionTextTwo}>
              өөрчилье
            </Text>
          </View>

          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.buttonGroup} >
            <Button title="Нэвтрэх" onPress={ () => this.props.navigation.navigate('Login') } multiline />
            <Button title="Бүртгүүлэх" onPress={ () => this.props.navigation.navigate('Register') } />
          </View>
          
        </ScrollView>
      </View>
    )
  }
}

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
      loading: false,
    }
  }

  onClickListener = (viewId) => {

    var form = new FormData();
        form.append("email", this.state.email);
        form.append("password", this.state.password);

    axios.post('http://172.18.69.33:8000/api/user/login',form)
        .then(function(response){
            console.log(response.data.success);
            // var respEmail = response.data.data.email;
            var respPass = response.data.success
            if(respPass){
              Alert.alert("Alert", "Амжилттай нэвтэрлээ!");
              this.setState({loading: true});
            }else{
              Alert.alert("Alert", "Өгөгдөл буруу!");
            }
        }).catch(function(error){
            console.log(JSON.stringify(error));
        });
        
      if(this.state.loading){
        this.props.navigation.goBack('Home');
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
            onPress={() => this.onClickListener('login')}>
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

        <TouchableHighlight style={Loginstyles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Нууц үгээ мартсан?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={Loginstyles.buttonContainer} onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Бүртгүүлэх</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class RegisterScreen extends Component {

  constructor(props) {
    super(props);
    state = {
      name    : '',
      email   : '',
      password: '',
      password_confirmation: '',
      loading: false,
    }
  }

  onClickListener = (viewId) => {

    var form = new FormData();
        form.append("name", this.state.name);
        form.append("email", this.state.email);
        form.append("password", this.state.password);
        form.append("password_confirmation", this.state.password_confirmation);

    axios.post('http://172.18.69.33:8000/api/user/register',form)
        .then(function(response){
            console.log(response.data);
            var respEmail = response.data.data.email;
            // var respPass = 
            this.setState({loading: true})
            
        }).catch(function(error){
            console.log(JSON.stringify(error));
        });

    Alert.alert("Alert", "Button pressed "+viewId+this.state.email+this.state.password);
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <View style={Loginstyles.container}>

        <View style={Loginstyles.inputContainer}>
          <Image style={Loginstyles.inputIcon} source={{uri: 'https://png.icons8.com/name/ultraviolet/50/3498db'}}/>
          <TextInput style={Loginstyles.inputs}
              placeholder="Name"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>
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

        <View style={Loginstyles.inputContainer}>
          <Image style={Loginstyles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={Loginstyles.inputs}
              placeholder="Password Confirmation"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password_confirmation) => this.setState({password_confirmation})}/>
        </View>

        <TouchableHighlight style={[Loginstyles.buttonContainer, Loginstyles.loginButton]} 
            onPress={() => this.onClickListener('login')}>
          <Text style={Loginstyles.loginText}>Бүртгүүлэх</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Login,
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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

