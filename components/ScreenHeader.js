/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Avatar from './Avatar';
import Icon from './Icon';
import Typography from './Typography';

 function ScreenHeader({heading, showAvatar}) {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Pressable
            onPress={()=>navigation.goBack()}
        >
          {
            showAvatar ?
            <Avatar />
            :
            <Icon 
            name='arrow-back'
            size={30}
            color='orangered'
            />
          }
        </Pressable>
      <View
        style={{flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center'}}
      >
        <Typography 
            text={heading}
            bold
            fontSize={20}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row', 
        alignItems:'center',
        paddingHorizontal: 10,
        paddingVertical:10,
    }
})

export default React.memo(ScreenHeader)