import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  SectionList,
} from 'react-native';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';

const Map = () => {
  return (
    <MapView
      style={{flex: 1}}
      region={{
        latitude: 49.263551,
        longitude: -123.138096,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker
        coordinate={{
          latitude: 49.263551,
          longitude: -123.138096,
        }}
        image={require('../../assets/images/map_pin.png')}
        style={{height: 20, width: 20}}
      />
    </MapView>
  );
};

export default Map;
