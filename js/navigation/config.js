import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Header} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigationState} from '@react-navigation/native';

const GradientHeader = props => (
  <View style={{backgroundColor: 'white', overflow: 'hidden'}}>
    <LinearGradient
      colors={['#cf392a', '#9963ea']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {height: '100%', width: '100%'}]}
    />
    <Header {...props} />
  </View>
);
const MenuButton = ({navigation}) => {
  return (
    <MaterialCommunityIcons
      style={{marginLeft: 10}}
      name="menu"
      color="white"
      size={25}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};
const BackButton = ({navigation}) => {
  return (
    <MaterialCommunityIcons
      style={{marginLeft: 10}}
      name="arrow-left"
      color="white"
      size={25}
      onPress={() => navigation.goBack()}
    />
  );
};
export const sharedScreenOptions = props =>
  console.log(props) || {
    headerBackTitleVisible: false,
    header: props => <GradientHeader {...props} />,
    headerStyle: {
      backgroundColor: 'transparent',
    },
    ...Platform.select({
      android: {
        headerLeft: () => {
          return props.route.name === 'Session' ? (
            <BackButton navigation={props.navigation} />
          ) : (
            <MenuButton navigation={props.navigation} />
          );
        },
      },
    }),
  };
export const sharedScreenOptions2 = props => ({
  headerBackTitleVisible: false,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  ...Platform.select({
    android: {
      headerLeft: () => null,
    },
  }),
});
