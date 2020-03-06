import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../lib/styles';
import GradientButton from '../../components/GradientButton';

const Session = ({
  faveIds,
  addFaveSession,
  removeFaveSession,
  session,
  navigation,
  speaker,
}) => {
  // console.log(faveIds);
  console.log(session);
  return (
    <View>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{session.location}</Text>
        {faveIds.includes(session.id) ? (
          <MaterialCommunityIcons style={styles.icon} name="heart" />
        ) : null}
      </View>
      <Text style={styles.title}>{session.title}</Text>
      <Text style={styles.startTime}>
        {moment(session.startTime).format('LT')}
      </Text>
      <Text style={styles.description}>{session.description}</Text>
      <Text style={styles.presentedBy}>Presented by:</Text>
      <View style={styles.speakerContainer}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{uri: speaker.image}}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Speaker', {
              speaker: speaker,
            })
          }>
          <Text style={styles.speaker}>{speaker.name}</Text>
        </TouchableOpacity>
      </View>
      {faveIds.includes(session.id) ? (
        <GradientButton
          onPress={() => removeFaveSession(session.id)}
          text="Remove from Faves"></GradientButton>
      ) : (
        <GradientButton
          onPress={() => addFaveSession(session.id)}
          text="Add to Faves"></GradientButton>
      )}
    </View>
  );
};

export default Session;
