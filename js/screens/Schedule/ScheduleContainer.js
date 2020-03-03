import Schedule from './Schedule';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Schedule navigation={this.props.navigation} />;
  }
}
