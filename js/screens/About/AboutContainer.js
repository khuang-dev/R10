import About from './About';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <About />;
  }
}
