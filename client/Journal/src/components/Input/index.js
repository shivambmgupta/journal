import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Style from './Style'

export default (props) => {
    return (
        <View style={Style.OuterContainer}>
            <TextInput {...props} />
        </View>
    );
}
