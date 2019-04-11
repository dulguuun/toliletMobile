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
import Storage from 'react-native-storage'
import MapView from 'react-native-maps'

const storage = new Storage({
  size: 1000,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  storageBackend: AsyncStorage,
  sync: {
  }
});

class MonitorMaps extends Component{

  render() {
    console.log('fucking world 1')
    return(
      <View style={styles.container}>
        <MapView
          // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title="This is My Location"
            description="I am here."
          />
        </MapView>
        <Text>Working</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 500,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export default MonitorMaps