/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';

export default function Input({ placeholder, onChangeText }) {
  return (
    <>
      <View style={styles.inputContainer}>

        <TextInput
          placeholderTextColor="#aaa"
          placeholder={placeholder}
          style={styles.input}
        />
      </View>
    </>
  );
}
