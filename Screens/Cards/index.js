/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import CreditCard from '../../components/CreditCard';

const cardDeatils = [
    {
        type: 'Visa',
        number: '4111111111111111',
        expirationMonth: '01',
        expirationYear: '2020',
        cvv: '123',
        name: 'Test Tester',
    }
]
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
                decelerationRate='fast'
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
    },
})