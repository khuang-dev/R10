import React from 'react';
import Text from '../../lib/CustomText';
import {View} from 'react-native';
import styles from './styles';

const Map = () => {
  return (
    <View style={styles.androidContainer}>
      <Text>Maps is currently not supported on Android</Text>
    </View>
  );
};

export default Map;
