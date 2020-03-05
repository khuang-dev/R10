import About from './About';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';

const CONDUCT = gql`
  {
    allConducts {
      id
      description
      title
      order
    }
  }
`;

export default class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Query query={CONDUCT}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error :(</Text>;
          if (data) return <About conducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}
