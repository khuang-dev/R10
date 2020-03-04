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
  console.log(sessions);
  return (
    <View>
      <SectionList
        sections={newSessions}
        keyExtractor={newSessions => newSessions.id}
        renderItem={({item}) => {
          return (
            <View style={styles.sessionContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Session', {
                    id: item.id,
                  })
                }>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.title}>{item.id}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.startTime}>{moment(title).format('LT')}</Text>
        )}
      />
    </View>
  );
};

export default Schedule;
