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
import { Images } from '../../Themes'
import axios from 'axios'

class Register extends Component {

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
          form.append("user_name", this.state.name);
          form.append("email", this.state.email);
          form.append("password", this.state.password);
          form.append("password_confirmation", this.state.password_confirmation);
  
      axios.post('http://124.158.124.60:8080/toilet/api/user/register',form)
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

export default Register