import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Schedule = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={{alignSelf: 'center'}}>Schedule</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Session')}>
        <Text style={{borderWidth: 1, borderColor: 'black'}}>
          Go to Session
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Schedule;
