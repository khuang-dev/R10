import Session from './Session';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Session />;
  }
}
