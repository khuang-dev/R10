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

const Speaker = ({speaker}) => {
  return (
    <View>
      <SafeAreaView style={{backgroundColor: 'black'}}></SafeAreaView>
      <View style={{backgroundColor: 'black', height: '100%'}}>
        <Text style={styles.header}>About the Speaker</Text>
        <View style={styles.speakerContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={{uri: speaker.image}}
            />
          </View>
          <Text style={styles.speaker}>{speaker.name}</Text>
          <Text style={styles.bio}>{speaker.bio}</Text>
        </View>
      </View>
    </View>
  );
};

export default Speaker;
