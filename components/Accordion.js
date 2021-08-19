/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Typography from './Typography';
import {default as Ionicon} from 'react-native-vector-icons/Ionicons';

export default function Accordion({heading, children, open = false}) {
    const height = useSharedValue(0);
    const rotate = useSharedValue('0deg');
    const [openList, setOpenList] = useState(open);
    const animatedStyle = useAnimatedStyle(()=>({
        height: height.value,
    }));
    const animatedStyle_icon = useAnimatedStyle(()=>({
        transform: [{rotate: withSpring( rotate.value)}],
    }));
    useEffect(() => {
        height.value = openList ? 'auto' : 0;
        rotate.value = openList ? '180deg' : '360deg';
    }, [openList]);
  return (
    <View style={styles.container} >
            <Pressable
                style={styles.heading}
                onPress={() => setOpenList(!openList)}
            >
                <Typography
                    text={heading}
                    fontSize={16}
                    bold
                />
                <Animated.View style={[animatedStyle_icon]} >
                    <Ionicon name="chevron-up-outline" size={20} />
                </Animated.View>
            </Pressable>
            <Animated.View style={[styles.listConatiner, animatedStyle]} >
                {children}
            </Animated.View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        overflow:'hidden',
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical:20,
        zIndex: 2,
        backgroundColor: 'white',
    },
    listConatiner: {
        zIndex: -1,
        // marginTop:10,
    },
});
