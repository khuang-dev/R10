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

const Session = ({route, navigation}) => {
  const {session} = route.params;
  return (
    <View>
      <Text>{session.location}</Text>
      <Text>{session.title}</Text>
      <Text>{moment(session.startTime).format('LT')}</Text>
      <Text>{session.description}</Text>
      <View>
        <Text>Presented by:</Text>
        <Image
          style={{height: 100, width: 100}}
          resizeMode={'contain'}
          source={{uri: session.speaker.image}}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Speaker')}>
          <Text>{session.speaker.name}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Speaker')}>
        <Text style={{borderWidth: 1, borderColor: 'black'}}>
          Remove from Faves
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
