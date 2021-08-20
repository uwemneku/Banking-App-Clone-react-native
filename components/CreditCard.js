import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Typography from './Typography';
import Animated, { Easing, Extrapolate, interpolate, interpolateColor, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';

const MaxH = Dimensions.get('window').height/2
const MinH = 128
const CreditCard = ({height, index, color, type='Visa', number='12233', name='Tester'}) => {
    const animatedStyle = useAnimatedStyle(() => ({
        height: withTiming(interpolate(
            height.value, 
            [(index -1 ) * MaxH, (index * MaxH)],
            [MinH, MaxH],
            Extrapolate.CLAMP
            ), {duration: 200}) 
    }))
   
    const card = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            height.value, 
            [(index -1 ) * MaxH, (index * MaxH)],
            ['white', 'orangered'],
            )
    }))
    return (
        <Animated.View
            style={[styles.container, animatedStyle]}
        >
            <Animated.View
                // start={{ x: 1, y: 0.2 }}
                // colors = {['rgb(255,0,0)', 'white']}
                style={[styles.card, card]}
            >
                <Typography 
                    text={name}
                    fontSize={20}
                    color='black'
                    bold
                />
                <Typography 
                    text={number}
                    fontSize={20}
                    color='black'
                    bold
                />

                <View style={styles.cardFotter}>
                    <Typography 
                        text={'ffggg'}
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
        elevation:1,
        zIndex:100,
        borderWidth:0,
        overflow:'hidden',
        // backgroundColor: 'white'
    },
    cardFotter:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
