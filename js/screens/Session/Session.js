import React from 'react';
import {
  View,
  Text,
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

const Session = ({
  faveIds,
  addFaveSession,
  removeFaveSession,
  session,
  navigation,
}) => {
  console.log(faveIds);
  console.log(session.id);
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
          source={{uri: session.speaker.image}}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Speaker', {
              speaker: session.speaker,
            })
          }>
          <Text style={styles.speaker}>{session.speaker.name}</Text>
        </TouchableOpacity>
      </View>
      {faveIds.includes(session.id) ? (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => removeFaveSession(session.id)}>
          <LinearGradient
            colors={['#9963ea', '#8797D6']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={[
              StyleSheet.absoluteFill,
              {height: 'auto', width: 'auto', borderRadius: 50},
            ]}
          />
          <Text style={styles.button}>Remove from Faves</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => addFaveSession(session.id)}>
          <LinearGradient
            colors={['#9963ea', '#8797D6']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={[
              StyleSheet.absoluteFill,
              {height: 'auto', width: 'auto', borderRadius: 50},
            ]}
          />
          <Text style={styles.button}>Add to Faves</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Session;
