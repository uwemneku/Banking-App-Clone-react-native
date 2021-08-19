/* eslint-disable prettier/prettier */
import React from 'react';
import {default as Ionicon} from 'react-native-vector-icons/Ionicons';

export default function Icon({name, size, color}) {
  return (
    <Ionicon
        name={name}
        size={size}
        color={color}
      />
  );
}
