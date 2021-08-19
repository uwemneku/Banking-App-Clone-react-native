/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import List from './List';
import Typography from './Typography';

function NavList({iconName, text}){
    return (
        <List
            iconName={iconName}
        >
                <View style={styles.listContent} >
                    <Typography
                         text={text}
                    />

                    <Typography
                        text=">"
                        color="orangered"
                    />
                 </View>
        </List>
    );
}

const styles = StyleSheet.create({
    listContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex:1,
        paddingVertical:20,
        paddingRight:20,
    },
});

export default React.memo(NavList);
