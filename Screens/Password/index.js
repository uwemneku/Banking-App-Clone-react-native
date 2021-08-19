/* eslint-disable prettier/prettier */
import React, { useState }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import RoundButton from './RoundButton';
import {default as Ionicon} from 'react-native-vector-icons/Ionicons';
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native';

const numbers = new Array(9).fill(0).map((_, i) => i + 1);

export default function Password() {
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const route = useRoute();

    const handleButtonClick =  (text) => {
        if (password.length  < 5){
            setPassword(password + text);
        }
    };
    const handleDelete = () => {
        const length = password.length;
        setPassword(password.substring(0, length - 1));
    };
    const handleBackButton = () => {
        navigation.goBack()
    }
    const handleOkButton = () => {
        //make network call to verify password verify password
    }
    return (
        <View style={styles.container} >
            <View
                style={{
                    padding:10,
                }}
            >
                <TouchableOpacity
                    onPress={handleBackButton}
                >
                    <Ionicon name="ios-close-outline" size={30} color="red" />
                </TouchableOpacity>
                <Text
                    style={{
                        textAlign:'center',
                        fontSize:14,
                        marginVertical:20,
                    }}
                >
                    Please enter current PIN to continue
                </Text>
            </View>
            <View style={styles.passwordContainer} >
                {
                    new Array(password.length).fill(0)
                        .map((_, i) => <Text style={styles.password} key={i} >*</Text>)
                }
            </View>
            <View style={styles.buttonConatainer} >
                {
                    numbers.map((number, i) => {
                        return (
                            <RoundButton
                                text={number}
                                bgcolor="white"
                                key={i}
                                elevation={4}
                                onClick = {()=>handleButtonClick(number)}
                            />
                        );
                    })
                }
                    <RoundButton
                        text={<Ionicon
                                name="arrow-back"
                                size={30}
                                color="black"
                            />}
                        onClick={handleDelete}
                    />
                    <RoundButton
                        text="0"
                        elevation={4}
                        bgcolor="white"
                        onClick = {()=>handleButtonClick('0')}

                    />
                    <RoundButton
                        text="OK"
                        elevation={4}
                        bgcolor="white"
                        onClick={handleOkButton}
                    />
                    <View
                        style={{
                            width:'100%',
                            paddingVertical:10,
                        }}
                    >
                        <Text
                            style={{
                                textAlign:'center',
                                fontSize:18,
                            }}
                        >
                            Forgot?
                        </Text>
                    </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor: 'whitesmoke',
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-between',
    },
    passwordContainer:{
        flexDirection:'row',
        justifyContent:'center',
    },
    buttonConatainer:{
        backgroundColor: 'whitesmoke',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        shadowOffset:{
            height:5,
            width:5,
        },
        shadowColor: 'black',
    },
    password:{
        padding:10,
        elevation:2,
        width:30,
        height:40,
        margin:5,
        borderWidth:1,
        borderRadius:5,
        borderColor:"red",
        textAlign:'center',
        backgroundColor:'white',
    },
});



