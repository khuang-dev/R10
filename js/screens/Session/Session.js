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

const Session = ({id, navigation, sessions}) => {
  console.log(id);
  return (
    <View>
      <Text>Hello</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Speaker')}>
        <Text style={{borderWidth: 1, borderColor: 'black'}}>
          Go to Speaker Modal
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
