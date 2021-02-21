import { StyleSheet, Dimensions } from 'react-native';
import * as Colors from '../constants/Colors';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    OuterContainer: { 
        flex: 1, 
        height: "auto", 
        backgroundColor: Colors.MAIN_THEME_COLOR
    },
    TopImageContainer: { 
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: width * 0.2
    },
    AlignCenter: {
        justifyContent: "center",
        alignItems: "center"
    },
    TopImage: {
        width: width,
        resizeMode: 'contain'
    },
    InnerContainer: {
        top: width * 0.2,
        backgroundColor: Colors.WHITE,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 30,
        flex: 1
    },
    CardContainer: {
        margin: 10,
        backgroundColor: Colors.WHITE,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        width: '90%',
        minHeight: 50,
        height: 'auto'
    },
    TopRightFloatingButtonContainer: {
        zIndex: 1,
        backgroundColor: 'white',
        minWidth: 70,
        minHeight: 30,
        top: 20,
        right: 20,
        borderRadius: 10,
        position: 'absolute',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    RowAndWrapperContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },
    fontBold: {
        fontWeight: 'bold'
    },
    fontWhiteText: {
        color: Colors.WHITE
    },
    fontBoldAndBlue: {
        fontWeight: 'bold',
        color: Colors.MAIN_THEME_COLOR,
    },
    fontMainHeading: {
        fontWeight: "bold",
        fontSize: 30,
    }
});