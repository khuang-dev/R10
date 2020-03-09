import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import styles from './styles';
import Text from '../../lib/CustomText';
import Collapsible from '../../components/Collapsible';

const About = ({conducts}) => {
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
          <Collapsible
            key={conduct.id}
            title={conduct.title}
            description={conduct.description}></Collapsible>
        );
      })}

      <View style={styles.copyrightContainer}>
        <Text style={styles.copyright}>© RED Academy 2020</Text>
      </View>
    </ScrollView>
  );
};

export default About;
