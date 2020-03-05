import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  SectionList,
  TouchableOpacity,
  Linking,
  Modal,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Speaker = ({speaker, navigation}) => {
  console.log(speaker);

  return (
    <View>
      <SafeAreaView style={{backgroundColor: 'black'}}></SafeAreaView>
      <View style={{backgroundColor: 'black', height: '100%'}}>
        <TouchableOpacity onPress={() => navigation.goBack('Session')}>
          <MaterialCommunityIcons name="close" style={styles.icon} />
        </TouchableOpacity>
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
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              Linking.openURL(`${speaker.url}`);
            }}>
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 0.0}}
              style={[
                StyleSheet.absoluteFill,
                {height: 'auto', width: 'auto', borderRadius: 50},
              ]}
            />
            <Text style={styles.button}>Read More on Wikipedia</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Speaker;
