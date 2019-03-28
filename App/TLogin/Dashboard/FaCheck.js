// Загвар шалгах
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
import axios from 'axios'

class FaCheck extends Component{

  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }
    
  componentDidMount = () =>{
    AsyncStorage.getItem('userData', (err, result) => {
      console.log('Storage Details ' + JSON.parse(result)[0]);
      console.log('Fuckers ' + result);
      console.log('Full of shit ' + result.name);
      // this.setState({ name: JSON.parse(result.name)[0] });
    });

    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC44OC44Nzo4MDAwL2FwaS91c2VyL2xvZ2luIiwiaWF0IjoxNTUzNzYyNDM5LCJleHAiOjE1NTM3NjYwMzksIm5iZiI6MTU1Mzc2MjQzOSwianRpIjoibDB1R3dNMTFQOXZJVXFMdiIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.ySHZBPVEYOtHXqFXLHXyBaKhOOUhk_jN3OWlTLhvqUU';
    let url = 'http://192.168.88.87:8000/api/products?token='+token+'';
        console.log('url '+ url);
    axios.get('http://192.168.88.87:8000/api/products?token='+token+'')
      .then(response => {
        console.log(response);
        let resJson = JSON.parse(JSON.stringify(response.data));
        this.setState({
          products: resJson
        });
        console.log(resJson);
      }).catch(error => {
        console.log(error);
      });
  }

  lapsList() {
    this.state.products.map((data) => {
      return (
        <View><Text>{data.time}</Text></View>
      )
    })
  }

  render() {

  //   contents = this.state.products.map(function (item) {
  //     return (
  //       <View key={item}>
  //         <Text>{item}</Text>
  //       </View>
  //     );
  //  });

    return(
      <View style={Loginstyles.container}>
        <View>
          <Text style={Loginstyles.headerText}>Бүтээгдэхүүнүүд</Text>
        </View>
        {/* <View>
          { contents }
        </View> */}
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

export default FaCheck