/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Pressable, Dimensions, Modal, GestureResponderEvent} from 'react-native';
import Icon from '../../components/Icon';

/**
 * @callback myCallback
 * @param {GestureResponderEvent} event - ...
 */


/**
 * @param {Object} props
 * @param {String} props.type
 * @param {Number} props.accountNumber
 * @param {myCallback} props.onButtonPress
*/
export default function AccountCards({type, accountNumber, onButtonPress}) {
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => setOpenModal(!openModal);
  return (
      <View style={[styles.root, {backgroundColor:type === 'Savings' ? 'white' : 'whitesmoke'}]} >
          <View style={styles.container}>
              <View>
                <Text style={styles.title}>
                    {`${type} Account`}
                </Text>
                <Text style={[styles.title, {fontWeight:'600'}]} >
                    {accountNumber}
                </Text>
              </View>
              <Pressable onPress={toggleModal} >
                  <Icon name="settings" size={20} color="red" />
              </Pressable>
          </View>
          <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.6} 
            onPress={onButtonPress}
          >
              <Text
                style={{
                    textAlign: 'center',
                    color:'red',
                }}
              >
                View balance
              </Text>
          </TouchableOpacity>
          <Modal
            animationType={'fade'}
            transparent={true}
            visible={openModal}

          >
              <Pressable
                style={styles.modal}
                onPress={toggleModal}

              >
                  <View
                    style={{flex:1}}
                  />
                  <View
                    style={styles.modalContent}
                  >

                  </View>
              </Pressable>

          </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
    root:{
        padding:20,
        width:Dimensions.get('window').width * 0.8,
        borderRadius:10,
        margin:5,
        elevation:5,
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:8,
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        marginVertical:4,
    },
    button:{
        width:'100%',
        borderColor:'red',
        borderWidth:1,
        paddingVertical:10,
        borderRadius:5,
    },
    modal:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgba(0, 0, 0, 0.219)',
        flexDirection: 'column',
    },
    modalContent:{
        backgroundColor:"white",
        height:200,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    }
});
