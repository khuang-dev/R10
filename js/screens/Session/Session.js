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
// import {addFaveSession} from '../../context/FavesContext';

const Session = ({
  faveIds,
  addFaveSession,
  removeFaveSession,
  session,
  navigation,
}) => {
  console.log(faveIds);
  return (
    <View>
      <Text style={styles.location}>{session.location}</Text>
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

      <TouchableOpacity onPress={() => addFaveSession(session.id)}>
        <Text style={{borderWidth: 1, borderColor: 'black', width: 90}}>
          Add to Faves
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeFaveSession(session.id)}>
        <Text style={{borderWidth: 1, borderColor: 'black', width: 130}}>
          Remove from Faves
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
