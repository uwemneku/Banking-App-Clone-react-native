/* eslint-disable prettier/prettier */
import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';
import lottiteFile from '../lottieFiles/coming soon.json'

export default function ComingSoon() {
    return (
        <View style={styles.container} >
            <LottieView 
                source={lottiteFile} 
                autoPlay 
                loop
                style={{
                    width: '80%',
                }} 
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    }
})

