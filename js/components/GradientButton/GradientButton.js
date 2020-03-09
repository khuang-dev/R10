import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Text from '../../lib/CustomText';
import PropTypes from 'prop-types';

const GradientButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <LinearGradient
        colors={['#9963ea', '#8797D6']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 0.0}}
        style={[
          StyleSheet.absoluteFill,
          {height: 'auto', width: 'auto', borderRadius: 50},
        ]}
      />
      <Text style={styles.button}>{text}</Text>
    </TouchableOpacity>
  );
};

GradientButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default GradientButton;
