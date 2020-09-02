import React from 'react';
import {StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../helpers/constants';

const LoadingScreen = () => {
  return (
    <Animatable.View style={styles.screen}>
      <Animatable.View animation="fadeInDownBig">
        <Icon name="movie-open" color="white" size={80}></Icon>
      </Animatable.View>
      <Animatable.Text animation="fadeInLeft" style={styles.title}>
        Moviefy
      </Animatable.Text>
      <Animatable.View animation="fadeInRight">
        <Animatable.Text
          animation="pulse"
          iterationCount="infinite"
          delay={1000}
          style={styles.subtitle}>
          Loading...
        </Animatable.Text>
      </Animatable.View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    color: 'white',
  },
  subtitle: {
    fontSize: 25,
    color: 'white',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
});
export default LoadingScreen;
