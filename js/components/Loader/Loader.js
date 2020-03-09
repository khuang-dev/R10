import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './styles';

export default class Loader extends Component {
  render() {
    return (
      <ActivityIndicator style={styles.loader} size="large" color="black" />
    );
  }
}
