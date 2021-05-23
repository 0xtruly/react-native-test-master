import React, { useEffect, useRef } from 'react';
import {
  Animated, View, StyleSheet, Easing,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  pulse: {
    backgroundColor: '#7FB900',
    width: 20,
    height: 20,
    borderRadius: 50,
    position: 'absolute',
  },
  fade: {
    borderRadius: 50,
    backgroundColor: '#7FB900',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    opacity: 0.2,
  },
});
const Loader = () => {
  const scaleContainer = useRef(new Animated.Value(0));
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scaleContainer.current, {
            toValue: 1.5,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          Animated.timing(fadeIn, {
            toValue: 0.2,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(scaleContainer.current, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          Animated.timing(fadeIn, {
            toValue: 0.1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(scaleContainer.current, {
            toValue: 1.5,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          Animated.timing(fadeIn, {
            toValue: 0.1,
            duration: 1000,
            useNativeDriver: true,

          }),
        ]),
      ]),
    ).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.fade, { transform: [{ scale: scaleContainer.current }], opacity: fadeIn }]}
      />
      <Animated.View style={[styles.fade, { opacity: fadeIn }]} />
      <View style={styles.pulse} />
    </View>
  );
};
export default Loader;
