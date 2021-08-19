import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Typography from './Typography';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const MaxH = Dimensions.get('window').height/2
const MinH = 128
const CreditCard = ({height, index, color}) => {
    const animatedStyle = useAnimatedStyle(() => ({
        height: withSpring(interpolate(
            height.value, 
            [(index -1 ) * MaxH, (index * MaxH)],
            [MinH, MaxH],
            Extrapolate.CLAMP
            ), {stiffness: 100, damping: 20}) 
    }))
    return (
        <Animated.View
            style={[styles.container, animatedStyle]}
        >
            <LinearGradient
                start={{ x: 1, y: 0.2 }}
                colors = {color}
                style={styles.gradient}
            >
                <Typography 
                    text="Test Bank"
                    fontSize={20}
                    color='white'
                    bold
                />
                <Typography 
                    text={height.value}
                    fontSize={20}
                    color='white'
                    bold
                />

                <View style={styles.cardFotter}>
                    <Typography 
                        text={'ffggg'}
                        color='white'
                    />
                    
                    <Typography 
                        text={'Visa'}
                        color='black'
                        bold
                        fontSize={20}
                    />
                </View>

            </LinearGradient>
        </Animated.View>
    )
}

export default CreditCard

const styles = StyleSheet.create({
    container:{
        marginVertical:0,
        padding:10,
    },
    gradient:{
        height:'100%',
        maxHeight: 200,
        padding:10,
        borderRadius:10,
        maxWidth:400,
        justifyContent:'space-between'
    },
    cardFotter:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
