import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Typography from './Typography';
import Animated, { concat, Easing, Extrapolate, interpolate, interpolateColor, runOnJS, useAnimatedStyle, withDelay, withSpring, withTiming } from 'react-native-reanimated';

const MaxH = Dimensions.get('window').height/2
const MinH = 128

const getCardColor = (type) => {
    switch(type){
        case 'visa':
            return '#00b6ff'
            break;
        case 'master card':
            return '#fca311'
            break;
        case 'amex':
            return '#ef476f'
            break;
        case 'discover':
            return '#ef233c'
            break;
        
        default:
            return '#00b6ff'
            break;
    }
}

/**
 * @param {Object} props
 * @param {Number} props.index
 * @param {Number} props.height
 * @param {String} props.type
 * @param {String} props.name
 * @param {String} props.number
 * @param {String} props.expirationMonth
 * @param {String} props.expirationYear
*/

const CreditCard = ({height, index, expirationYear, expirationMonth, type, number, name}) => {
    let u = interpolate(
        height.value, 
        [(index -1 ) * MaxH, (index * MaxH)],
        [0, 100],
        Extrapolate.CLAMP
        )
    const animatedStyle = useAnimatedStyle(() => ({
        height: withDelay(200, withSpring(interpolate(
            height.value, 
            [(index -1 ) * MaxH, (index * MaxH)],
            [MinH, MaxH],
            Extrapolate.CLAMP
            ), {velocity: 20})),
            
        transform: [{scale: withTiming(interpolate(
                        height.value, 
                        [(index -1 ) * MaxH, (index * MaxH)],
                        [0.8, 1],
                        Extrapolate.CLAMP
                        ), {duration: 100}) },
                    {
                        rotateX: withDelay(200, withSpring(interpolate(
                            height.value, 
                            [(index -1 ) * MaxH, (index * MaxH)],
                            [60, 0],
                            Extrapolate.CLAMP
                            ) + 'deg', {velocity: 20}))
                    }  
                   ]
    }))
    
    const cardColor = getCardColor(type.toLowerCase())

    const cardColorStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            height.value, 
            [(index -1 ) * MaxH, (index * MaxH)],
            ['white', cardColor],
            )
    }))
    
    const cardNumerStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            height.value, 
            [(index -1 ) * MaxH, (index * MaxH)],
            [0, 1],
            Extrapolate.CLAMP
            )
    }))
    return (
        <Animated.View
            style={[styles.container, animatedStyle]}
        >
            <Animated.View
                style={[styles.card, cardColorStyle]}
            >
                <Typography 
                    text={name}
                    fontSize={20}
                    color='whitesmoke'
                    bold
                />
                <Animated.View style={[cardNumerStyle]} >
                    <Typography 
                        text={`${number.substring(0, 2)}${ "x".repeat(number.length - 3)}${number[number.length - 1]}`}
                        fontSize={20}
                        color='white'
                        bold
                    />
                </Animated.View>

                <View style={styles.cardFotter}>
                    <Typography 
                        text={`${expirationMonth}/${expirationYear}`}
                        color='black'
                    />
                    
                    <Typography 
                        text={type}
                        color='black'
                        bold
                        fontSize={20}
                    />
                </View>

            </Animated.View>
        </Animated.View>
    )
}

export default CreditCard

const styles = StyleSheet.create({
    container:{
        marginVertical:0,
        padding:10,
    },
    card:{
        height:'100%',
        maxHeight: 200,
        padding:20,
        borderRadius:10,
        maxWidth:400,
        justifyContent:'space-between',
        elevation:5,
        zIndex:100,
        borderWidth:0,
        overflow:'hidden',
    },
    cardFotter:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
