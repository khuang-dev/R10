import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import moment from 'moment';
import {formatSessionData} from './helper/FormatSessionData';

const Schedule = ({navigation, sessions}) => {
  const newSessions = formatSessionData(sessions);
  // console.log(newSessions);
  let startTime = moment(sessions.startTime).format('LT');
  return (
    <View>
      <SectionList
        sections={newSessions}
        keyExtractor={newSessions => newSessions.id}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <Text>{moment(title).format('LT')}</Text>
        )}
      />

      <Text style={{alignSelf: 'center'}}>Schedule</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Session')}>
        <Text style={{borderWidth: 1, borderColor: 'black'}}>
          Go to Session
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Speaker')}>
        <Text style={{borderWidth: 1, borderColor: 'black'}}>
          Go to Speaker Modal
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Schedule;
