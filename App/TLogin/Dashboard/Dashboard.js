import React, { Component } from 'react'
import { 
    ScrollView, 
    Text, 
    Image, 
    View,
    AsyncStorage,
    TouchableHighlight,
    StyleSheet
  } from 'react-native'

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
        name: '',
        email: '',
        timestamp: ''
    }
  }
    
  componentDidMount = () =>{
    AsyncStorage.getItem('userData', (err, result) => {
      console.log('Storage Details ' + JSON.parse(result)[0]);
      console.log('Fuckers ' + result);
      console.log('Full of shit ' + result.name);
      // this.setState({ name: JSON.parse(result.name)[0] });
    });
  }

  render () {
    return (
      <View style={Loginstyles.container}>
        <View>
          <Text style={Loginstyles.headerText}>Үндсэн цэс</Text>
        </View>

        <View style={Loginstyles.inputContainer1}>
          <TouchableHighlight style={[Loginstyles.facebook, Loginstyles.loginButton]} 
            onPress={() => this.props.navigation.navigate('FaCheck')}>
            <Text style={Loginstyles.loginText}>Загвар шалгах</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[Loginstyles.facebook, Loginstyles.loginButton]} 
            onPress={() => this.props.navigation.navigate('FaCheck')}>
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