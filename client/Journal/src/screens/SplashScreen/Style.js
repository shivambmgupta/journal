import { StyleSheet, Dimensions } from 'react-native'
import { MAIN_THEME_COLOR, WHITE } from '../../constants/Colors'
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    OuterContainer: { 
        flex: 1, 
        backgroundColor: MAIN_THEME_COLOR,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    BackGroundImageContainer: {
        position: 'absolute',
    },
    BackgroundImage: {
        height: height,
        resizeMode: 'cover'
    },
    ForegroundImageContainer: {
        marginBottom: -20
    },
    ForegroundImage: {
        width: width * 0.8,
        height: height * 0.3,
        resizeMode: 'contain'
    },
    TitleText: {
        fontSize: 30,
        color: WHITE,
        fontWeight: 'bold'
    },
    CopyrightView: {
        position: 'absolute',
        bottom: 20
    }
});