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
  button: {
    alignSelf: 'center',
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  icon: {
    marginTop: 5,
    fontSize: 18,
    color: '#cf392a',
  },
});

export default styles;
