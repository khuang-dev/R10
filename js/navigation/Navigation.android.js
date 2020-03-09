import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import MapScreen from '../screens/Map';
import FavesScreen from '../screens/Faves';
import AboutScreen from '../screens/About';
import {sharedScreenOptions} from './config';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
          headerTitleStyle: {
            fontFamily: 'Montserrat-Regular',
          },
        }}
      />
      <ScheduleStack.Screen
        name="Session"
        component={SessionScreen}
        options={{
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Regular',
          },
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
          headerTitleStyle: {
            fontFamily: 'Montserrat-Regular',
          },
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
          headerTitleStyle: {
            fontFamily: 'Montserrat-Regular',
          },
        }}
      />
      <FavesStack.Screen
        name="Session"
        component={SessionScreen}
        options={{
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Regular',
          },
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
          headerTitleStyle: {
            fontFamily: 'Montserrat-Regular',
          },
        }}
      />
    </AboutStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNav = props => (
  <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: '#9963ea',
      labelStyle: {
        fontFamily: 'Montserrat-Regular',
      },
    }}
    screenOptions={({route}) => ({
      drawerIcon: ({focused, size, color}) => {
        let iconName;
        if (route.name === 'Schedule') {
          iconName = focused ? 'calendar-blank' : 'calendar-blank-outline';
        } else if (route.name === 'Map') {
          iconName = focused ? 'map' : 'map-outline';
        } else if (route.name === 'Faves') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'About') {
          iconName = focused ? 'information' : 'information-outline';
        }
        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
      },
    })}>
    <Drawer.Screen name="Schedule" component={ScheduleStackScreens} />
    <Drawer.Screen name="Map" component={MapStackScreens} />
    <Drawer.Screen name="Faves" component={FavesStackScreens} />
    <Drawer.Screen name="About" component={AboutStackScreens} />
  </Drawer.Navigator>
);

export default DrawerNav;
