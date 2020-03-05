import Speaker from './Speaker';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Speaker
        speaker={this.props.route.params.speaker}
        navigation={this.props.navigation}
      />
    );
  }
}
