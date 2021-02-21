import { StyleSheet, Dimensions } from 'react-native'
import * as Colors from '../../constants/Colors'

export default StyleSheet.create({
    Wrapper: {
        backgroundColor: Colors.TOAST_MESSAGE_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        elevation: 10
    },
   ToastMessage: {
    color: Colors.WHITE
   } 
});