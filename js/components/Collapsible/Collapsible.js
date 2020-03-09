import React from 'react';
import {
  Animated,
  Easing,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../lib/CustomText';
import styles from './styles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.animatedRotate = new Animated.Value(0);
    this.animatedRotateReverse = new Animated.Value(0);
    this.opacityPlus = new Animated.Value(0);
    this.opacityMinus = new Animated.Value(0);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    this.collapsible();
  }

  toggleHandle = () => {
    this.setState({isOpen: !this.state.isOpen});
    LayoutAnimation.easeInEaseOut();
  };
  collapsible = () => {
    this.animatedRotate.setValue(0);
    this.animatedRotateReverse.setValue(0);
    this.opacityPlus.setValue(0);
    this.opacityMinus.setValue(0);

    const createAnimation = (value, duration, easing, delay = 0) => {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay,
      });
    };
    Animated.parallel([
      createAnimation(this.animatedRotate, 500, Easing.ease),
      createAnimation(this.animatedRotateReverse, 500, Easing.ease),
      createAnimation(this.opacityPlus, 500, Easing.ease),
      createAnimation(this.opacityMinus, 500, Easing.ease),
    ]).start();
  };

  render() {
    const rotate = this.animatedRotate.interpolate({
      inputRange: [0, 1],
      outputRange: this.state.isOpen ? ['90deg', '0deg'] : ['0deg', '90deg'],
    });
    const rotateReverse = this.animatedRotate.interpolate({
      inputRange: [0, 1],
      outputRange: this.state.isOpen ? ['180deg', '0deg'] : ['0deg', '-180deg'],
    });
    const opacityPlus = this.animatedRotate.interpolate({
      inputRange: [0, 1],
      outputRange: this.state.isOpen ? [1, 0] : [0, 1],
    });
    const opacityMinus = this.animatedRotate.interpolate({
      inputRange: [0, 1],
      outputRange: this.state.isOpen ? [0, 1] : [1, 0],
    });

    return (
      <>
        <TouchableOpacity
          style={styles.conductTitleContainer}
          onPress={() => {
            this.collapsible(), this.toggleHandle();
          }}>
          <View>
            <Animated.View
              style={{
                transform: [{rotate: rotate}],
                opacity: opacityPlus,
                width: 15,
                height: 15,
                position: 'absolute',
              }}>
              <MaterialCommunityIcons
                style={styles.icon}
                name="plus"
                size={15}
                color="purple"
              />
            </Animated.View>
            <Animated.View
              style={{
                transform: [{rotate: rotateReverse}],
                opacity: opacityMinus,
                width: 15,
                height: 15,
              }}>
              <MaterialCommunityIcons
                style={styles.icon}
                name="minus"
                size={15}
                color="purple"
              />
            </Animated.View>
          </View>
          <Text style={styles.conductTitle}>{this.props.title}</Text>
        </TouchableOpacity>
        <>
          {this.state.isOpen ? (
            <Text style={styles.description}>{this.props.description}</Text>
          ) : null}
        </>
      </>
    );
  }
}

export default Collapsible;
