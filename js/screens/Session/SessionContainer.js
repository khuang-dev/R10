import Session from './Session';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {FavesContext} from '../../context/FavesContext';
import Loader from '../../components/Loader';

const SPEAKER = gql`
  query($id: ID!) {
    Speaker(id: $id) {
      id
      bio
      image
      name
      url
    }
  }
`;

export default class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <Query
        query={SPEAKER}
        variables={{id: this.props.route.params.session.speaker.id}}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error :(</Text>;
          if (data) console.log(data);
          return (
            <FavesContext.Consumer>
              {({faveIds, addFaveSession, removeFaveSession}) => (
                <Session
                  faveIds={faveIds}
                  addFaveSession={addFaveSession}
                  removeFaveSession={removeFaveSession}
                  session={this.props.route.params.session}
                  navigation={this.props.navigation}
                  speaker={data.Speaker}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
