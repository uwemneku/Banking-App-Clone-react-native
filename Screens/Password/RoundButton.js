/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

function RoundButton({text, bgcolor = 'transparent', elevation = 0, onClick}) {
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            style={[styles.button, {backgroundColor:bgcolor, elevation:elevation}]}
            onPress ={onClick}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText:{
       textAlign: 'center',
       fontSize: 20,
       color: 'black',
       fontWeight: '600',
    },
    button:{
        width: Dimensions.get('window').width * 0.2,
        height:Dimensions.get('window').width * 0.2,
        borderRadius: 300,
        marginHorizontal:Dimensions.get('window').width * 0.04,
        marginVertical:Dimensions.get('window').width * 0.02,
        elevation:5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default React.memo(RoundButton);
