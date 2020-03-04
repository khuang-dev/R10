import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    color: 'white',
    marginTop: 30,
    marginBottom: 60,
  },
  speaker: {
    marginLeft: 10,
    fontSize: 25,
    alignSelf: 'center',
  },
  bio: {
    color: 'black',
    margin: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageContainer: {
    alignSelf: 'center',
    margin: 20,
  },
  speakerContainer: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 5,
    width: '95%',
    alignSelf: 'center',
  },
});

export default styles;
