// Загвар дэлгэрэнгүй
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

class DetialFaCheck extends Component{
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('name', 'some default value');
    const otherParam = navigation.getParam('price', 'NO-ID');
    const definition = navigation.getParam('definition', 'some default value');
    return(
      <View style={styles.container}>
        <View>
          <Text style={{fontSize:25}}>Танилцуулга</Text>
        </View>
        <Text style={styles.rowText}>
          <Text>Нэр: {itemId}</Text>
          <Text>Үнэ: {JSON.stringify(otherParam)}</Text>
          <Text>{JSON.stringify(definition)}</Text>
        </Text>
        <View>
          {/* <Image style={{flex: 1}} resizeMode='cover' source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}} /> */}
          <Image style={styles.inputIcon} source={{uri: 'https://thumbs.dreamstime.com/z/wooden-toilet-shed-old-wooden-toilet-shed-out-order-sign-door-109618025.jpg'}}/>
        </View>
      </View>
    );
  }
}

export default DetialFaCheck

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin:30
  },
  rowText:{
    flexDirection: 'row',
    padding:15,
    fontSize:18,
    color:'#ff9900'
  },
  inputIcon:{
    width:'100%',
    height:'80%',
    // marginLeft:15,
  },
});