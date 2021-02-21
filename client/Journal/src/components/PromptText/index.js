import React from 'react';
import { Text } from 'react-native'
import Style from './Style'
import * as Consts from '../../constants/Constants'

export default (props) => (
    <Text style={
        [
            Style.PromptText, 
            props.type === Consts.PROMPT_TYPE_ERROR 
                ? Style.ErrorText 
                : Style.SuccessText
        ]
    }>
        {props.text}
    </Text>
);
