import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import MapScreen from '../screens/Map';
import FavesScreen from '../screens/Faves';
import AboutScreen from '../screens/About';

/* use push for profile */
/* any navigation will have a prop like this.props.history/match (props.navigation) */
const ScheduleStack = createStackNavigator();
const ScheduleStackScreens = props => {
  return (
    <ScheduleStack.Navigator initialRouteName="Schedule">
      <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} />
      <ScheduleStack.Screen name="Session" component={SessionScreen} />
    </ScheduleStack.Navigator>
  );
};
const MapStack = createStackNavigator();
const MapStackScreens = props => {
  return (
    <MapStack.Navigator initialRouteName="Map">
      <MapStack.Screen name="Map" component={MapScreen} />
    </MapStack.Navigator>
  );
};

const FavesStack = createStackNavigator();
const FavesStackScreens = props => {
  return (
    <FavesStack.Navigator initialRouteName="Faves">
      <FavesStack.Screen name="Faves" component={FavesScreen} />
      <FavesStack.Screen name="Session" component={SessionScreen} />
    </FavesStack.Navigator>
  );
};

const AboutStack = createStackNavigator();
const AboutStackScreens = props => {
  return (
    <AboutStack.Navigator initialRouteName="About">
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
};

const BottomTabNav = createBottomTabNavigator();
const BottomTabNavScreens = props => (
  <BottomTabNav.Navigator
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: '#CACACA',
      style: {
        backgroundColor: 'black',
      },
      labelStyle: {
        fontSize: 10,
      },
    }}>
    <BottomTabNav.Screen name="Schedule" component={ScheduleStackScreens} />
    <BottomTabNav.Screen name="Map" component={MapStackScreens} />
    <BottomTabNav.Screen name="Faves" component={FavesStackScreens} />
    <BottomTabNav.Screen name="About" component={AboutStackScreens} />
  </BottomTabNav.Navigator>
);

export default BottomTabNavScreens;
