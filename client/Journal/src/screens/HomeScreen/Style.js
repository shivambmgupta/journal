import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import * as Colors from '../../constants/Colors';

export default StyleSheet.create({
    ScrollViewParentContainer: {
        flex: 1, 
        height: "auto"
    },
    ScrollViewContentContainer: {
        paddingBottom: 60
    },
    RoundFixedButton: { 
        position:'absolute',
        width: 80, 
        height: 80, 
        borderRadius: 40, 
        backgroundColor: Colors.MAIN_THEME_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 20,
        right: 10, 
        bottom: 100
    }
});