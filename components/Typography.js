/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

/**
 * Componets for rendering text
 * @param {Object} props
 * @param {Number} [props.fontSize]
 * @param {String} [props.color]
 * @param {Boolean} [props.bold]
 * @param {String} props.text
 * @param {String} props.textAlign
*/
 function Typography({fontSize=16, color='black', bold, text, textAlign="left"}) {
    return (
            <Text
                style={{
                    fontSize: fontSize,
                    color: color,
                    fontWeight: bold ? 'bold' : 'normal',
                    textAlign:textAlign
                }}
            >
                {text}
            </Text>
    )
}


export default React.memo(Typography)
