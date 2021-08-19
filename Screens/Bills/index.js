/* eslint-disable prettier/prettier */
import React from 'react'
import { View, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native'
import List from '../../components/List';
import Divider from '../../components/Divider';
import Typography from '../../components/Typography';
import Icon from '../../components/Icon';

const billsData = [
    {
        name:"Electricity",
        icon: 'ios-home-outline',
        details: 'Lorem something'
    },
    {
        name:"Electricity",
        icon: 'ios-home-outline',
        details: 'Lorem something'
    },
    {
        name:"Electricity",
        icon: 'ios-home-outline',
        details: 'Lorem something'
    },
    {
        name:"Electricity",
        icon: 'ios-home-outline',
        details: 'Lorem something'
    },
    {
        name:"Electricity",
        icon: 'ios-home-outline',
        details: 'Lorem something'
    },
    {
        name:"Electricity",
        icon: 'ios-home-outline',
        details: 'Lorem something'
    },
    {
        name:"Electricity",
        icon: 'ios-home-outline',
        details: 'Lorem something'
    },
   
]
export default function Bills() {
    const [allbills, setAllbills] = React.useState(billsData);

    const handleInput = (text) => {
        const newbills = bills.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
        setAllbills(newbills)
    }

    return (
        <View style={styles.container} >
            <TextInput 
                style={styles.input} 
                onChangeText={handleInput} 
                placeholder = "Search bills"
            />

                {/* <FlatList
                    style={styles.billsContainer}
                    data={allbills}
                    renderItem={({ item }) => 
                                    <View >
                                        <View style={{marginHorizontal:10}} >
                                            <List elevateIcon={true} iconName={item.icon} >
                                                    <View style={{paddingLeft:10}} >
                                                        <Typography 
                                                            text={item.name}
                                                        />
                                                        <Typography 
                                                            text={item.details}
                                                            fontSize={10}
                                                            color="gray"
                                                        />
                                                    </View>
                                            </List>
                                        </View>
                                        <Divider bgcolor="lightgray" verticalMargin={10} />
                                    </View>
                                }
                    keyExtractor={item => item.id}
    
                /> */}
                <ScrollView style={styles.billsContainer} >
                    {
                        allbills.map((item, index) => {
                            return (
                                <View key={index}>
                                    <List elevateIcon={true} iconName={item.icon} >
                                            <View style={{paddingLeft:10}} >
                                                <Typography 
                                                    text={item.name}
                                                />
                                                <Typography 
                                                    text={item.details}
                                                    fontSize={10}
                                                    color="gray"
                                                />
                                            </View>
                                    </List>
                                    <Divider bgcolor="lightgray" verticalMargin={10} />
                                </View>
                            )
                        })   
                    }
                </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    billsContainer:{
        paddingLeft:20,
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



