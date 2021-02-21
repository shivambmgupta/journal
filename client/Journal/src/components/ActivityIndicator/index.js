import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native'
import Styles  from './Style'
import * as Colors from '../../constants/Colors'

export default props => {
    return (
        <View style={Styles.Wrapper}>
            <ActivityIndicator size="large" color={Colors.MAIN_THEME_COLOR} />
            {
                props.message &&
                <Text>
                    {props.message}
                </Text>
            }
        </View>
    );
}