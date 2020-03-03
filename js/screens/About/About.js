import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import styles from './styles';

const About = () => {
  return (
    <SafeAreaView>
      <Text style={styles.pageTitle}>About</Text>
      <Image
        style={styles.logo}
        resizeMode={'contain'}
        source={require('../../assets/images/r10_logo.png')}
      />
      <Text>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.header}>Date & Venue</Text>
      <Text>
        The R10 conference will take place on Saturday, December 8, 2018 in
        Vancouver, BC.
      </Text>
      <Text style={styles.header}>Code of Conduct</Text>
    </SafeAreaView>
  );
};

export default About;
