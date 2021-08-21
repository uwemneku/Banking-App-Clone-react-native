/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigation from './Navigation'
import { Provider } from 'react-redux';
import AlertBox from './components/AlertBox';
import Animated, { useAnimatedStyle, useSharedValue, withDecay, withTiming } from 'react-native-reanimated';


export default function App() {
  const opacity = useSharedValue(0);
  const fadeinStyle = useAnimatedStyle(()=>({
    opacity: withTiming(opacity.value, {duration: 500}),
  }))

  useEffect(() => {
    opacity.value = 1;
  }, [])
  return (
    <NavigationContainer>
      <Animated.View style={[styles.container, fadeinStyle]} >
        <MainStackNavigation />
        <AlertBox />
      </Animated.View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    flex:1,
  },
})
