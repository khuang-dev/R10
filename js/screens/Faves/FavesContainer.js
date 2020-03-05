import Faves from './Faves';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {FavesContext} from '../../context';
import Loader from '../../components/Loader';

const SCHEDULE = gql`
  {
    allSessions {
      id
      location
      startTime
      title
      description
      speaker {
        id
        bio
        image
        name
        url
      }
    }
  }
`;
export default class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Query query={SCHEDULE}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error :(</Text>;
          if (data)
            return (
              <FavesContext.Consumer>
                {({faveIds}) => {
                  const favedSession = data.allSessions.filter(session =>
                    faveIds.includes(session.id),
                  );
                  return (
                    <Faves
                      faveIds={faveIds}
                      favedSessions={favedSession}
                      navigation={this.props.navigation}
                    />
                  );
                }}
              </FavesContext.Consumer>
            );
        }}
      </Query>
    );
  }
}
