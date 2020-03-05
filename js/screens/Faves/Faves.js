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
import {formatSessionData} from './helper/FormatSessionData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Faves = ({favedSessions, navigation}) => {
  const newSessions = formatSessionData(favedSessions);
  return (
    <View>
      {favedSessions.length === 0 ? (
        <View>
          <Text style={styles.emptyStateText}>
            You haven't faved any sessions yet.
          </Text>
        </View>
      ) : (
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
                      <MaterialCommunityIcons
                        style={styles.icon}
                        name="heart"
                      />
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
      )}
    </View>
  );
};

export default Faves;
