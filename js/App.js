import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';
import {ApolloProvider} from '@apollo/react-hooks';
import client from '../js/config/api';
import FavesProvider from './context/';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <NavigationContainer>
            <RootNav />
          </NavigationContainer>
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
