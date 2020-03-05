import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SectionList,
  FlatList,
} from 'react-native';
import styles from './styles';

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

      <FlatList
        data={conducts}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <View style={styles.copyrightContainer}>
        <Text>© RED Academy 2020</Text>
      </View>
    </ScrollView>
  );
};

export default About;
