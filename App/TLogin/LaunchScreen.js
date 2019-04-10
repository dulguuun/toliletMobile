import React, { Component } from 'react'
import { 
    ScrollView, 
    Text, 
    Image, 
    View, 
    Button, 
    StyleSheet,
    TouchableOpacity
  } from 'react-native'
import Login from './LoginScreen/LoginForm'
import Register from './LoginScreen/Register'
import Dashboard from './Dashboard/Dashboard'
import FaCheck from './Dashboard/FaCheck'
import DetialFaCheck from './Dashboard/DetialFaCheck'
import Negotation from './Dashboard/Negotation'
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

          {/* <View style={styles.buttonGroup} >
            <Button title="Нэвтрэх" color="#841584" onPress={ () => this.props.navigation.navigate('Dashboard') } />
            <Button title="Бүртгүүлэх" onPress={ () => this.props.navigation.navigate('Register') } />
          </View> */}

          <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Login') }>
            <Text style={styles.buttonText} > Нэвтрэх </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Register') } style={styles.button}>
            <Text style={styles.buttonText}> Бүртгүүлэх </Text>
          </TouchableOpacity>
          
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
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        title: 'Customer Name, profiles edit, logout',
        headerLeft: null,
        gesturesEnabled: false,
      },
    },
    FaCheck: {
      screen: FaCheck,
    },
    DetialFaCheck: {
      screen: DetialFaCheck,
    },
    Negotation: {
      screen: Negotation,
      navigationOptions: {
        title: 'Customer Name, profiles edit, logout',
        headerLeft: null,
        gesturesEnabled: false,
      },
    },
    Login: {
      screen: Login
    },
    Register: {
      screen: Register,
    },
  }
);

