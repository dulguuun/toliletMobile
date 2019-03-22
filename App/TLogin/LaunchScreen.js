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
import Auth from './LoginScreen/Auth'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Images } from '../Themes'

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
            <Button title="Нэвтрэх" onPress={ () => this.props.navigation.navigate('Login') } />
            <Button title="Бүртгүүлэх" onPress={ () => this.props.navigation.navigate('Login') } />
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
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
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

        <TouchableHighlight style={[Loginstyles.buttonContainer, Loginstyles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={Loginstyles.loginText}>Нэвтрэх</Text>
        </TouchableHighlight>

        <TouchableHighlight style={Loginstyles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Нууц үгээ мартсан?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={Loginstyles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Бүртгүүлэх</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: LaunchScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    // Register: {
    //   screen: RegisterScreen,
    // },
  },
  {
    initialRouteName: 'Home',
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
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
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
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

