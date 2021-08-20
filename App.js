/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigation from './Navigation'
import AlertBox from './components/AlertBox';


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container} >
        <MainStackNavigation />
        <AlertBox />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    flex:1,
  },
})
