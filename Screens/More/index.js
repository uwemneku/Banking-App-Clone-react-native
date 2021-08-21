/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Divider from '../../components/Divider'
import NavList from '../../components/NavList'

const list = [
    {
        name:'Security Settings',
        icon:'settings-outline'
    },
    {
        name:'Manage Beneficiaries',
        icon:'color-filter-outline'
    },
    {
        name:'Loans and Deposits',
        icon:'file-tray-stacked-outline'
    },
    {
        name:'Full Statement',
        icon:'ios-clipboard-outline'
    },
    {
        name:'Legal',
        icon:'reader-outline'
    },
    {
        name:'Contact us',
        icon:'location-outline'
    },
]

export default function More() {
    return (
        <View style={styles.container} >
            <ScrollView>
                {
                    list.map((item, index) => (
                        <TouchableOpacity 
                            activeOpacity={0.6} 
                             key={index}
                        >
                            <NavList
                                iconName={item.icon}
                                text={item.name}
                            />
                            <Divider verticalMargin={10} bgcolor='gray'/>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        minHeight: Dimensions.get('window').height,
    }
})