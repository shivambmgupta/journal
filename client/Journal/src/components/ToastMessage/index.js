import React from 'react';
import { 
    View, 
    Text
} from 'react-native';
import Styles from './Style';

export default (props) => {
    return (
        <View style={Styles.Wrapper}>
            <Text style={Styles.ToastMessage}>
                {props.text}
            </Text>
        </View>
    );
}