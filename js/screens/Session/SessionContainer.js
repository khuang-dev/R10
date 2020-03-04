import Session from './Session';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';

export default class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Session
        session={this.props.route.params.session}
        navigation={this.props.navigation}
      />
    );
  }
}
