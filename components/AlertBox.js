/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Typography from './Typography';

const AlertBox = ({message="LKKJKJLK"}) => {

  const [showAlert, setShowAlert] = useState(false) // replace with state from redux

  const bottom = useSharedValue(-200)
  const animatedStyle = useAnimatedStyle(()=>({
    bottom: withSpring(bottom.value)
  }))
  useEffect(() => {
    let changeState;

    if (showAlert === true){
      bottom.value = 0;
      changeState =  setTimeout(() => {
        bottom.value = -200;
        setShowAlert(false);
      }, 3000);
    }

    return () => clearTimeout(changeState)
      
  }, [showAlert])

 

  return (
    <Animated.View style={[animatedStyle, styles.container]}>
      <View style={styles.content} >
        <Typography 
          text={message}
          color="white"
          textAlign="center"
        />
      </View>
    </Animated.View>
  );
};


const styles = StyleSheet.create({
  container:{
    position:'absolute',
    minHeight:100,
    width: Dimensions.get('screen').width,
    backgroundColor:'red',
  },
  content:{
    padding:10
  }
});

export default AlertBox;