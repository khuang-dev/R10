import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  SectionList,
  FlatList,
} from 'react-native';
import styles from './styles';
import Text from '../../lib/styles';

const About = ({conducts}) => {
  console.log(conducts);
  return (
    <ScrollView>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode={'contain'}
          source={require('../../assets/images/r10_logo.png')}
        />
      </View>
      <Text style={styles.description}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.header}>Date & Venue</Text>
      <Text style={styles.description}>
        The R10 conference will take place on Saturday, December 8, 2018 in
        Vancouver, BC.
      </Text>
      <Text style={styles.header}>Code of Conduct</Text>

      {conducts.map(conduct => {
        return (
          <View key={conduct.id}>
            <Text style={styles.conductTitle}>{conduct.title}</Text>
            <Text style={styles.description}>{conduct.description}</Text>
          </View>
        );
      })}

      <View style={styles.copyrightContainer}>
        <Text>© RED Academy 2020</Text>
      </View>
    </ScrollView>
  );
};

export default About;
