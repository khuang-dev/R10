import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../lib/CustomText';
import GradientButton from '../../components/GradientButton';
import PropTypes from 'prop-types';

const Speaker = ({speaker, navigation}) => {
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
Speaker.propTypes = {
  speaker: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Speaker;
