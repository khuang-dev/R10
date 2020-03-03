import Faves from './Faves';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Faves />;
  }
}
