import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import * as Colors from '../../constants/Colors';

export default StyleSheet.create({
    ImageBackground: {
        width: width,
        height: height
    },
    OuterContainer: {
        flex: 1,
        backgroundColor: Colors.MAIN_THEME_COLOR
    },
    InnerContainer: {
        backgroundColor: Colors.WHITE,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 20,
        height: height * 0.8,
        width: width,
        top: height * 0.2,
        padding: 20
    },
    SVGContainer: {
        position: "absolute", 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0
    },
    SeparatorLine: {
        borderBottomColor: Colors.GREY,
        borderBottomWidth: 0.6,
        marginVertical: 25,
        width: 200
    },
    BoldText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});