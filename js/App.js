import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import About from '../js/screens/About';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <About />
        </View>
      </SafeAreaView>
    );
  }
}
