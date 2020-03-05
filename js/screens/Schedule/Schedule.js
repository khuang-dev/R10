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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Schedule = ({faveIds, navigation, sessions}) => {
  console.log(faveIds);
  console.log(sessions);
  const newSessions = formatSessionData(sessions);
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
                    session: item,
                  })
                }>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.locationContainer}>
                  <Text style={styles.location}>{item.location}</Text>
                  {faveIds.includes(item.id) ? (
                    <MaterialCommunityIcons style={styles.icon} name="heart" />
                  ) : null}
                </View>
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
