import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pageTitle: {
    alignSelf: 'center',
  },
  header: {
    fontSize: 20,
    margin: 10,
  },
  description: {
    margin: 10,
    fontWeight: '200',
    lineHeight: 20,
  },
  copyrightContainer: {
    margin: 10,
    paddingTop: 20,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#e6e6e6',
  },
  copyright: {
    fontWeight: '200',
  },
  logo: {
    width: '95%',
    height: 45,
    alignSelf: 'center',
  },
  logoContainer: {
    alignSelf: 'center',
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
  },
});

export default styles;
