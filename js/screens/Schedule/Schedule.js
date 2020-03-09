import React from 'react';
import {View, SectionList, TouchableOpacity} from 'react-native';
import styles from './styles';
import moment from 'moment';
import {formatSessionData} from '../../lib/helper/FormatSessionData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../lib/CustomText';
import PropTypes from 'prop-types';

const Schedule = ({faveIds, navigation, sessions}) => {
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
                  item.speaker !== null
                    ? navigation.navigate('Session', {
                        session: item,
                      })
                    : null
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
Schedule.propTypes = {
  faveIds: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  sessions: PropTypes.array.isRequired,
};

export default Schedule;
