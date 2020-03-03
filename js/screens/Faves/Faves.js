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
      <Text style={styles.pageTitle}>Faves</Text>
    </SafeAreaView>
  );
};

export default Faves;
