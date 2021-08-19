/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Divider from './Divider';
import Icon from './Icon';
import Typography from './Typography';
/**
 * This componenet renders its childern with an icon
 * @param {Object} props
 * @param {String} props.iconName The name of the icon fron Ionic icon library
 * @param {Boolean} props.elevateIcon Indicates if the icon will have background shadow. Default value of false
 * @param {Boolean} props.iconType 
*/
 function List({iconName, iconType, elevateIcon, children}) {
  return (
    <View style={styles.container}>
        <View style={styles.content} >
            <View style={[styles.icon, {elevation: elevateIcon ? 5 : 0}]}>
                {
                    iconType === "text" ? 
                        <Typography text={iconName} bold />
                        :
                        <Icon name={iconName} size={20} color='orangered' />
                }
            </View>
            {children}
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        // margin:10,
    },
    icon:{
        width:50,
        height:50,
        borderRadius: 5,
        borderWidth:0,
        marginRight:10,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        flexDirection: 'row',
        alignItems:'center',
    }
});

export default React.memo(List);