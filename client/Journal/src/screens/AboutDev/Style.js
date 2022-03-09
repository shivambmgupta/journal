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
    SocailMediaContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "60%",
        marginVertical: 25,
        justifyContent: "space-evenly"
    },
    SocialMediaIcon: {
        marginHorizontal: 5
    },
    ContactDetailsTopRow: {
        justifyContent: "space-between",
        width: width * 0.8,
        flexDirection: 'row',
        marginBottom: 10
    },
    ContactDetailsRow: {
        justifyContent: "space-between",
        width: width * 0.8,
        flexDirection: 'row'
    },
    CardTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    CardBody: {
        paddingVertical: 10
    },
    TechnologyTag: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    }
});