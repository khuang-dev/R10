import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    color: 'white',
    marginBottom: 60,
    fontSize: 15,
  },
  speaker: {
    marginLeft: 10,
    fontSize: 25,
    alignSelf: 'center',
  },
  bio: {
    color: 'black',
    margin: 15,
    fontWeight: '200',
    fontSize: 15,
    lineHeight: 25,
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
  icon: {
    marginLeft: 10,
    fontSize: 25,
    color: 'white',
  },
  button: {
    alignSelf: 'center',
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 15,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default styles;
