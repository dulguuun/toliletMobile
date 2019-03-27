import React, { Component } from 'react'
import { 
    ScrollView, 
    Text, 
    Image, 
    View, 
    Button, 
    StyleSheet,
  } from 'react-native'
import Login from './LoginScreen/LoginForm'
import Register from './LoginScreen/Register'
import Dashboard from './Dashboard/Dashboard'
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
            <Button title="Бүртгүүлэх" onPress={ () => this.props.navigation.navigate('Register') } />
          </View>
          
        </ScrollView>
      </View>
    )
  }
}

// const RootStack = 

// const AppContainer = createAppContainer(RootStack);

export default createStackNavigator(
  {
    Home: {
      screen: LaunchScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    Dashboard: Dashboard,
    Login: {
      screen: Login
    },
    Register: {
      screen: Register,
    },
  }
);

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

