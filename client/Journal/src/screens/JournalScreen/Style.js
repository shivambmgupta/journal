import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import * as Colors from '../../constants/Colors';

export default StyleSheet.create({
    ScrollViewParentContainer: {
        flex: 1, 
        height: "auto"
    },
    ScrollViewContentContainer: {
        paddingBottom: 150,
        minHeight: height * 0.75,
        alignItems: 'center',
        elevation: 0 
    },
    HeaderView: {
        flexDirection: 'row',
        width: width * 0.85,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 25
    },
    RoundButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        elevation: 10
    },
    DeleteButton: { backgroundColor: Colors.RED },
    EditButton: { backgroundColor: Colors.MAIN_THEME_COLOR },
    TitleContainer: {
        backgroundColor: Colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 40,
        borderRadius: 20,
        elevation: 10
    },
    TitleText: {
        fontSize: 16,
        marginHorizontal: 5
    },
    BottomButtonContanier: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingHorizontal: 20,
        paddingVertical: 10,
        minWidth: width * 0.8
    }
});