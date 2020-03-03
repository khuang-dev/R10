import Map from './Map';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Map />;
  }
}
