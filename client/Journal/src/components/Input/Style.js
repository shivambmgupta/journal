import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
const { height, width} = Dimensions.get('window');

export default StyleSheet.create({
    OuterContainer: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderRadius: 30,
        minHeight: 60,
        padding: 5,
        paddingLeft: 20,
        margin: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
    }
});