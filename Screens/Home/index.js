/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar  } from 'react-native';
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, Extrapolate } from 'react-native-reanimated';
import Avatar from '../../components/Avatar';
import Divider from '../../components/Divider';
import Typography from '../../components/Typography';
import AccountCards from './AccountCards';
import Activities from './Activities';
import QuickView from './QuickView';


const accounts = [
    {
        type:'Savings',
        id: 123456787,
    },
    {
        type:'Visa',
        id: 123456787,
    },
    {
        type:'Express',
        id: 123456787,
    },
];
export default function Home() {
    const navigation = useNavigation();

    const translationY = useSharedValue(0);  //to track scroll offset to animate header
    const scrollHandler = useAnimatedScrollHandler((event)=> {
        //move header on initial scroll and show again when scroll offset exceeed 80
        translationY.value = Math.abs(event.contentOffset.y) < 80 ? Math.abs(event.contentOffset.y) : 0;
    });
    const headerStyle = useAnimatedStyle(() => ({
      transform:[{translateY: interpolate(translationY.value, [0, 80], [0, -80], Extrapolate.CLAMP)}],
    }));
    return (
        <View style={styles.root}>
            <StatusBar backgroundColor="red"  />
            <Animated.View style={[styles.header, headerStyle]}>
                <Avatar />
            </Animated.View>
            <Animated.ScrollView
                contentContainerStyle={{
                    paddingBottom:100,
                    paddingTop:80,
                }}
                onScroll={scrollHandler}
            >
                <View
                    style={{
                        height:200,
                        backgroundColor:'red',
                        paddingHorizontal:10,
                    }}
                >
                    <Typography text="Welcome back" color="white" />
                    <Typography text="Uwem Israel" color="white" bold={true} fontSize={30} />
                    <Divider bgcolor="white" />
                </View>

                <View
                    style={{
                        marginTop:-100,
                        backgroundColor:'transparent',
                    }}
                >
                    <View style={{paddingHorizontal:10}} >
                        <Typography text="My Accounts" color="white" bold={true} />
                    </View>
                    <Animated.ScrollView
                        pagingEnabled={true}
                        snapToAlignment="end"
                        scrollEventThrottle={16}
                        contentContainerStyle={{
                            paddingHorizontal:30,
                        }}
                        decelerationRate="fast"
                        snapToInterval={Dimensions.get('window').width * 0.8}
                        horizontal={true}

                    >
                        {
                            accounts.map((account,index)=>{
                                return (
                                    <AccountCards
                                        key={index}
                                        accountNumber={account.id}
                                        type={account.type}
                                        onButtonPress={() => navigation.navigate('password', {accountNumber:account.id})}
                                    />
                                );}
                            )
                        }
                    </Animated.ScrollView>
                </View>
                <QuickView />
                <Activities />
            </Animated.ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        backgroundColor:'whitesmoke',
        flex:1,
    },
    quick:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'red',
        padding:10,
        height:80,
        position:'absolute',
        top:0,
        left:0,
        right:0,
        zIndex:100,
        // marginBottom:10,
    },
});
