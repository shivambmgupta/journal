import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import * as Colors from '../../constants/Colors';

export default StyleSheet.create({
    RegisterButton: {
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        width: 100,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 20,
        left: width * 0.5 - 50
    },
    RegisterButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.MAIN_THEME_COLOR
    },
    CenterAligned: {
        justifyContent: "center",
        alignItems: "center"
    },
    ScrollViewParentContainer: {
        width: width * 0.9,
        maxHeight: height * 0.75,
        paddingRight: 10
    },
    ScrollViewContainer: {
        padding: 15,
        alignItems: "center"
    },
    FooterContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: width,
        position: "absolute",
        top: height - 200,
    }
});