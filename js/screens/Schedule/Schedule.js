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
  return (
    <View>
      <SectionList
        sections={newSessions}
        keyExtractor={newSessions => newSessions.id}
        renderItem={({item}) => {
          return (
            <View style={styles.sessionContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.startTime}>{moment(title).format('LT')}</Text>
        )}
      />

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
