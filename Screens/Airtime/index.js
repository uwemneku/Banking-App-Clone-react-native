/* eslint-disable prettier/prettier */
import React from 'react'
import { useEffect } from 'react'
import { View, Text, PermissionsAndroid, Dimensions, StyleSheet, FlatList, ActivityIndicator, TextInput } from 'react-native'
import LottieView from 'lottie-react-native';
import lottiteFile from '../../lottieFiles/coming soon.json'
import useLoadContacts from './../../hooks/useLoadContacts';
import List from '../../components/List';
import Divider from '../../components/Divider';
import Typography from '../../components/Typography';

export default function Airtime() {
    const [ contacts, isloading ] = useLoadContacts()
    const [allContacts, setAllContacts] = React.useState([]);

    const handleInput = (text) => {
        const newContacts = contacts.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
        setAllContacts(newContacts)
    }

    useEffect(() => {
        !isloading && setAllContacts(contacts.sort((a, b) => a.name.localeCompare(b.name)))
    }, [isloading])
    return (
        <View style={styles.container} >
            <TextInput 
                style={styles.input} 
                onChangeText={handleInput} 
                placeholder = "Search Contacts"
            />

            {
                !isloading ?
                <FlatList
                    style={styles.contactsContainer}
                    data={allContacts}
                    renderItem={({ item }) =>{ 
                        if(Object.keys(item).includes('phoneNumbers')){
                            return (<View >
                                        <View style={{marginHorizontal:10}} >
                                            <List elevateIcon={true} iconType="text" iconName={item.name.substring(0, 2)} >
                                                    <View style={{}} >
                                                        <Typography 
                                                            text={item.name}
                                                        />
                                                        <Typography 
                                                            text={item.phoneNumbers[0].number}
                                                            fontSize={12}
                                                            color="gray"
                                                        />
                                                    </View>
                                            </List>
                                        </View>
                                        <Divider bgcolor="lightgray" verticalMargin={10} />
                                    </View>)
                          };
                                    }
                                }
                    keyExtractor={item => item.id}
    
                />
                :
                <ActivityIndicator size="large" color="white" />
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    contactsContainer:{
        paddingLeft:20,
        height: Dimensions.get('window').height + 200,
    },
    input:{
        backgroundColor:'white',
        padding:10,
        borderColor: 'black',
        borderWidth: 1,
        margin:20,
        borderRadius:10
    }
})



