import Session from './Session';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';

const SCHEDULE = gql`
  {
    allSessions {
      id
      location
      startTime
      title
      speaker {
        id
      }
    }
  }
`;
export default class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Query query={SCHEDULE}>
        {({loading, error, data}) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          if (data)
            return (
              <Session
                navigation={this.props.navigation}
                sessions={data.allSessions}
              />
            );
        }}
      </Query>
    );
  }
}
