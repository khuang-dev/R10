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
    <SafeAreaView>
      <Text style={styles.emptyStateText}>
        You haven't faved any sessions yet.
      </Text>
    </SafeAreaView>
  );
};

export default Faves;
