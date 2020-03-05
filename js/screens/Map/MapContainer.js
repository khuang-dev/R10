import Map from './Map';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default class App extends Component {
  render() {
    console.log(this.props);

    return <Map />;
  }
}
