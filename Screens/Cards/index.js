/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import CreditCard from '../../components/CreditCard';

const cardDetails = [
    {
        type: 'Visa',
        number: '4111111111111111',
        expirationMonth: '01',
        expirationYear: '2020',
        cvv: '123',
        name: 'Test Tester',
    },
    {
        type: 'Amex',
        number: '4111111111111111',
        expirationMonth: '01',
        expirationYear: '2020',
        cvv: '123',
        name: 'Test Tester',
    },
    {
        type: 'Master Card',
        number: '4111111111111111',
        expirationMonth: '01',
        expirationYear: '2020',
        cvv: '123',
        name: 'Test Tester',
    },
    {
        type: 'Discover',
        number: '4111111111111111',
        expirationMonth: '01',
        expirationYear: '2020',
        cvv: '123',
        name: 'Test Tester',
    },
    {
        type: 'Visa',
        number: '4111111111111111',
        expirationMonth: '01',
        expirationYear: '2020',
        cvv: '123',
        name: 'Test Tester',
    },
    {
        type: 'Visa',
        number: '4111111111111111',
        expirationMonth: '01',
        expirationYear: '2020',
        cvv: '123',
        name: 'Test Tester',
    },
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
                //The height of the container is set to prevent over scrolling
                contentContainerStyle={{height:((cardDetails.length + 1)*(Dimensions.get('window').height/2))}}
                snapToInterval={Dimensions.get('window').height/2}
                decelerationRate='fast'
            >
                {
                    cardDetails.map((card, i)=> 
                         <CreditCard 
                            name={card.name} 
                            number={card.number}
                            type={card.type} 
                            expirationMonth={card.expirationMonth}
                            expirationYear={card.expirationYear}
                            height={y} 
                            index={i} color={i%2 == 0 ? ['red', 'orange'] : ['white', 'blue']}  
                            key={i}
                        />
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