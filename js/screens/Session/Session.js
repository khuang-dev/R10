import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../lib/CustomText';
import GradientButton from '../../components/GradientButton';
import PropTypes from 'prop-types';

const Session = ({
  faveIds,
  addFaveSession,
  removeFaveSession,
  session,
  navigation,
  speaker,
}) => {
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
Session.propTypes = {
  faveIds: PropTypes.array.isRequired,
  addFaveSession: PropTypes.func.isRequired,
  removeFaveSession: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  speaker: PropTypes.object.isRequired,
};

export default Session;
