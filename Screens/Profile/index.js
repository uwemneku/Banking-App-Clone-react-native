/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Pressable, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Avatar from '../../components/Avatar';
import Divider from '../../components/Divider';
import Icon from '../../components/Icon';
import List from '../../components/List';
import NavList from '../../components/NavList';
import Typography from '../../components/Typography';
import useLoadImage from '../../hooks/useLoadImage';

const navigationList = [
    {
        name:'Share App',
        icon:'md-share-social-outline',
        action: async ()=>{
            try {
                const result = await Share.share({message:'React Native | A framework for building native apps using React'});

                if (result.action === Share.sharedAction){
                    if (result.activityType){

                    } else {

                    }
                } else if (result.action === Share.dismissedAction){

                }
            }
            catch (error){

            }
        },
    },
    {
        name:'Invite a friend',
        icon:'ios-mail-open-outline',
        action: ()=>{},
    },
    {
        name:'Change Language',
        icon:'language-outline',
        action: ()=>{},
    },
    {
        name:'Log out',
        icon:'ios-log-in-outline',
        action: ()=>{},
    },
];
export default function Profile() {
    const navigation = useNavigation();
    const handleIconPress = () => navigation.goBack();
    const {image, loadImage,loading} = useLoadImage([1, 1]);
    return (
        <View style={{backgroundColor:'white'}} >
            <View style={styles.header} >
                <Pressable style={styles.icon} onPress={handleIconPress} >
                    <Typography
                        text="X"
                        bold
                        color="white"
                        fontSize={20}
                    />
                </Pressable>
            </View>

            <View style={styles.userDetails} >
                <View style={{flexDirection:'row', alignItems:'flex-end'}} >
                    <Avatar size={80} imageUri={!loading && image} />
                    <Pressable style={styles.avatarIcon} onPress={loadImage} >
                        <Icon name="add" size={20} color="white" />
                    </Pressable>
                </View>
                <Typography
                    fontSize={30}
                    text="Uwem Israel"
                    bold
                />
            </View>
                {
                    navigationList.map((item, index) =>
                        <TouchableOpacity 
                            activeOpacity={0.6} 
                            key={index}
                            onPress={item.action}
                        >
                            <NavList
                                iconName={item.icon}
                                text={item.name}
                            />
                            <Divider bgcolor='gray'/>
                        </TouchableOpacity>
                    )
                }
            <View />
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        backgroundColor: 'orangered',
        height:Dimensions.get('screen').height * 0.3,
    },
    icon:{
        padding:10,
        paddingHorizontal:20,
    },
    avatarIcon:{
        backgroundColor:'red',
        width:30,
        height:30,
        borderRadius:200,
        marginLeft:-20,
        justifyContent:'center',
        alignItems:'center',
    },
    userDetails:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:-50,
    },
});
