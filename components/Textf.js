import React, {useEffect} from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { withSpring } from 'react-native-reanimated'

const W = Dimensions.get('screen').width
const H = Dimensions.get('screen').height
const CFG = ({x, i}) => {
    const uu = useAnimatedStyle(()=>({
        transform: [{rotate:withSpring(interpolate(
            x.value,
            [(i -1) * W,  (i*W), (i +1) * W],
            [30, 0, -30],
            Extrapolate.CLAMP
        )+ 'deg', {overshootClamping:true, stiffness:200 }) },
        {translateX:interpolate(
            x.value,
            [(i -1) * W,  (i*W), (i +1) * W],
            [200, 0, -250],
            Extrapolate.CLAMP
        )}
        ],



        }))
        useEffect(() => {
            console.log(interpolate(
                x.value,
                [(i -1) * W, (i*W)],
                [30, 0],
                Extrapolate.CLAMP
            ));
        }, [])
        return (
        <Animated.View
            style={[styles.container, uu]} 
        />
    )
}

export default CFG

const styles = StyleSheet.create({
    container:{
        width: W, 
        height: H, 
        backgroundColor: 'red', 
        borderColor: 'white', 
        borderWidth: 20,
    }
})
