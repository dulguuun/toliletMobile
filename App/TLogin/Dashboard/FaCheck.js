// Загвар шалгах
import React, { Component } from 'react'
import { 
  ScrollView, 
  Text, 
  Image, 
  View, 
  Button, 
  TextInput,
  TouchableOpacity, 
  StyleSheet,
  Alert,
  AsyncStorage,
  FlatList
} from 'react-native'
import axios from 'axios'
import { SearchBar } from 'react-native-elements'

class FaCheck extends Component{

  constructor(props){
    super(props);
    this.state = {
      search: '',
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

    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC44OC44Nzo4MDAwL2FwaS91c2VyL2xvZ2luIiwiaWF0IjoxNTUzODU4OTI5LCJleHAiOjE1NTM4NjI1MjksIm5iZiI6MTU1Mzg1ODkyOSwianRpIjoiM1VZWG84dmNoVUNsR0t6YSIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.k5QymPRqTpTa8X30Pw5-HktT54e-301CU2vmkIVWieM';
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

  updateSearch = search => {
    this.setState({ search });
  }

  renderItem(item) {
    return(
      <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('DetialFaCheck') }
          style={{flex:1/3,
          aspectRatio:1}}>
      <Text>{item.name}</Text>
      <Image style={{flex: 1}} resizeMode='cover' source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}} ></Image>
      </TouchableOpacity>
    );
  }

  render() {
    return(
      <View style={Loginstyles.container}>
        <View>
          <Text style={Loginstyles.headerText}>Таны байршилд тохирох загвар</Text>
        </View>
        <View>
          <SearchBar 
            placeholder="Хайх үгээ оруул"
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
        </View>
        <FlatList
          numColumns={3}
          data={this.state.products}
          renderItem={({item}) =>this.renderItem(item)}
          // keyExtractor={(item, index) => index}
        />
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
    fontSize:20,
    color:'black',
    alignItems:'center',
    padding:20,
    borderBottomWidth:1,
    borderBottomColor: 'black',
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