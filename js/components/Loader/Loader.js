import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export default class Loader extends Component {
  render() {
    return (
      <ActivityIndicator style={styles.loader} size="large" color="black" />
    );
  }
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});
