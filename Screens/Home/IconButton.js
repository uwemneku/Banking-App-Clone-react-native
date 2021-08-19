/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from '../../components/Icon';
/**
 * This buttons are located on the home page and lead to other parts of the app
 * @param {Object} props
 * @param {String} props.iconName This is the name of the icon (from IonicIcon library) that will be used in the button
 * @param {String} props.text The text shown in the button
 * @param {String} props.color The refers to the color of the text
 * @param {Object|String} props.screenName The refers to the name of the screen the button navgagtes to
*/
function IconButton({iconName, text, color = 'black', screenName}) {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(screenName);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.button}
      onPress={handlePress}
    >
      <Icon
        name={iconName}
        size={30}
        color={color}
      />
      <Text style={styles.text} >{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row',
        alignItems: 'center',
        borderColor:'rgba(128, 128, 128, 0.479)',
        borderWidth:2,
        borderRadius:5,
        width:'45%',
        margin:'2%',
    },
    text:{
        textAlign:'center',
        fontWeight:'600',
        paddingHorizontal:10,
    },
});


export default React.memo(IconButton);
