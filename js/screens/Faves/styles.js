import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  emptyStateText: {
    alignSelf: 'center',
    marginTop: 350,
  },
  startTime: {
    backgroundColor: '#e6e6e6',
    marginLeft: 10,
  },
  location: {
    color: '#999999',
    lineHeight: 30,
  },
  title: {
    marginLeft: 10,
  },
  sessionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    paddingTop: 10,
    paddingBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    marginTop: 5,
    fontSize: 18,
    color: '#cf392a',
  },
});

export default styles;
