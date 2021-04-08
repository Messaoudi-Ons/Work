/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        marginVertical: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
    },
    titleContainer: {
        width: '100%',
        alignItems: 'center',
    },
});

export default Header;
