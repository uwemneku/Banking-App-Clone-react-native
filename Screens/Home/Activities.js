/* eslint-disable prettier/prettier */
import React  from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Accordion from '../../components/Accordion';
import Divider from '../../components/Divider';
import List from '../../components/List';
import Typography from '../../components/Typography';
import getActivityIconName from '../../helpers/getActivityIconName';


const allActions = [
    {
        action:'bills',
        time:'name',
        details: 'You paid your bills',
        status:'sucess',
    },
    {
        action:'airtime',
        time:'name',
        details: 'You bought airtime',
        status:'sucess',
    },
    {
        action:'transfer',
        time:'name',
        details: 'You Transfered money',
        status:'sucess',
    },
];
/**
 * This shows a list of all current activities that occured in a bank account
*/

export default function Activities() {

    return (
        <Accordion heading="Activities" >
            {
                allActions.map((action, index) => {
                    return (
                        <TouchableOpacity  activeOpacity={0.8} key={index}>
                            <List 
                                elevateIcon
                                iconName = {getActivityIconName(action.action)}
                            >   
                                <View style={styles.listChildern} >
                                    <Typography
                                        text={action.action.toUpperCase()}
                                        bold
                                    />
                                    <Typography
                                        text={action.details}
                                        color="gray"
                                    />
                                </View>
                            </List>
                            <Divider bgcolor='lightgray' />
                        </TouchableOpacity>
                    );
                }
                )
            }
        </Accordion>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    listChildern:{
        flexDirection:'column',
        justifyContent:'center',
        paddingVertical:20,
        overflow:'hidden',
    },
});
