import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  emptyStateText: {
    fontWeight: '200',
    fontSize: 15,
  },
  emptyStateContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startTime: {
    backgroundColor: '#e6e6e6',
    marginLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
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
    paddingTop: 12,
    paddingBottom: 8,
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
