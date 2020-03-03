import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    );
  }
}
