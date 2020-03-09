import Schedule from './Schedule';
import React, {Component} from 'react';
import Text from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {FavesContext} from '../../context/FavesContext';
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
      }
    }
  }
`;

export default class ScheduleContainer extends Component {
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
                {({faveIds}) => (
                  <Schedule
                    faveIds={faveIds}
                    navigation={this.props.navigation}
                    sessions={data.allSessions}
                  />
                )}
              </FavesContext.Consumer>
            );
        }}
      </Query>
    );
  }
}
