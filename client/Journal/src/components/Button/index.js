import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import Style from './Style'
import * as Colors from '../../constants/Colors'

export default (props) => {
    return (
        <TouchableOpacity style={[Style.OuterContainer, props.disabled && { backgroundColor: Colors.GREY } ]} {...props}>
            <Text style={Style.ButtonText}>{props.title}</Text>
        </TouchableOpacity>
    );    
}
