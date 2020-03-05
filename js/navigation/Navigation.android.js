import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import MapScreen from '../screens/Map';
import FavesScreen from '../screens/Faves';
import AboutScreen from '../screens/About';
import {sharedScreenOptions} from './config';
import {createDrawerNavigator} from '@react-navigation/drawer';

/* use push for profile */
/* any navigation will have a prop like this.props.history/match (props.navigation) */
const ScheduleStack = createStackNavigator();
const ScheduleStackScreens = props => {
  return (
    <ScheduleStack.Navigator
      initialRouteName="Schedule"
      screenOptions={sharedScreenOptions}>
      <ScheduleStack.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          headerTintColor: 'white',
        }}
      />
      <ScheduleStack.Screen
        name="Session"
        component={SessionScreen}
        options={{
          headerTintColor: 'white',
        }}
      />
    </ScheduleStack.Navigator>
  );
};
const MapStack = createStackNavigator();
const MapStackScreens = props => {
  return (
    <MapStack.Navigator
      initialRouteName="Map"
      screenOptions={sharedScreenOptions}>
      <MapStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerTintColor: 'white',
        }}
      />
    </MapStack.Navigator>
  );
};

const FavesStack = createStackNavigator();
const FavesStackScreens = props => {
  return (
    <FavesStack.Navigator
      initialRouteName="Faves"
      screenOptions={sharedScreenOptions}>
      <FavesStack.Screen
        name="Faves"
        component={FavesScreen}
        options={{
          headerTintColor: 'white',
        }}
      />
      <FavesStack.Screen
        name="Session"
        component={SessionScreen}
        options={{
          headerTintColor: 'white',
        }}
      />
    </FavesStack.Navigator>
  );
};

const AboutStack = createStackNavigator();
const AboutStackScreens = props => {
  return (
    <AboutStack.Navigator
      initialRouteName="About"
      screenOptions={sharedScreenOptions}>
      <AboutStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerTintColor: 'white',
        }}
      />
    </AboutStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNav = props => (
  <Drawer.Navigator>
    <Drawer.Screen name="Scheule" component={ScheduleStackScreens} />
    <Drawer.Screen name="Map" component={MapStackScreens} />
    <Drawer.Screen name="Faves" component={FavesStackScreens} />
    <Drawer.Screen name="About" component={AboutStackScreens} />
  </Drawer.Navigator>
);

export default DrawerNav;
