import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  startTime: {
    marginLeft: 15,
    marginTop: 15,
    color: '#cf392a',
  },
  location: {
    color: '#999999',
    lineHeight: 30,
    marginLeft: 15,
    marginTop: 10,
  },
  title: {
    marginLeft: 15,
    fontSize: 25,
  },
  description: {
    margin: 15,
  },
  presentedBy: {
    marginLeft: 15,
    color: '#999999',
  },
  speaker: {
    color: 'black',
    marginTop: 15,
    marginLeft: 10,
  },
  speakerContainer: {
    flexDirection: 'row',
    margin: 15,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default styles;
