import React from 'react';
import {
  View,
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
import Text from '../../lib/styles';
import GradientButton from '../../components/GradientButton';

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
          <GradientButton
            text="Read More on Wikipedia"
            onPress={() => {
              Linking.openURL(`${speaker.url}`);
            }}></GradientButton>
        </View>
      </View>
    </View>
  );
};

export default Speaker;
