import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  SectionList,
} from 'react-native';
import styles from './styles';

const Faves = () => {
  return (
    <View>
      <Text style={styles.emptyStateText}>
        You haven't faved any sessions yet.
      </Text>
    </View>
  );
};

export default Faves;
