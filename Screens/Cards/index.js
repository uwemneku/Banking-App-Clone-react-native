/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import CreditCard from '../../components/CreditCard';

export default function Cards() {
    const y = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll : ({contentOffset: {y: value}}) => { 
            y.value = value;
        },
    })
    return (
        <View style={styles.container} >
            <StatusBar hidden backgroundColor='red' />
            <Animated.ScrollView
                onScroll={onScroll}
                scrollEventThrottle={16}
                contentContainerStyle={{height:(21*(Dimensions.get('window').height/2))}}
                snapToInterval={Dimensions.get('window').height/2}
            >
                {
                    new Array(20).fill(2).map((_, i)=> 
                         <CreditCard height={y} index={i} color={i%2 == 0 ? ['red', 'orange'] : ['white', 'blue']}  key={i}/>
                    )
                }
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
})