import { StyleSheet } from 'react-native'
import * as Colors from '../../constants/Colors';

export default StyleSheet.create({
    PromptText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    SuccessText: {
        color: Colors.GREEN
    },
    ErrorText: {
        color: Colors.RED
    }
});