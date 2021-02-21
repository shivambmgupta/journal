import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    AppState,
    Linking,
} from 'react-native';
import GlobalStyles from '../../util/GlobalStyles';
import * as Consts from '../../constants/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails, logoutAction } from '../../redux/actions';
import Styles from './Style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ActivityIndicator from '../../components/ActivityIndicator';

export default (props) => {
    const dispatch = useDispatch();
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);

    const userDetails = useSelector(state => state.reducer.userDetails);
    const token = useSelector(state => state.reducer.token)

    useEffect(() => {
        fetchUserAllDetails();
        AppState.addEventListener('change', _handleAppStateChange);
        const unsubsribe = props.navigation.addListener('focus', fetchUserAllDetails)
        return () => {
            unsubsribe();
            AppState.removeEventListener('change', _handleAppStateChange);
        }
    }, []);

    const _handleAppStateChange = (nextAppState) => {
        if (appState.current.match(/inactive|background/)
            && nextAppState === 'active'
        )
            fetchUserAllDetails();
        appState.current = nextAppState;
        setAppStateVisible(appState.current);
    }

    const fetchUserAllDetails = () => {
        if (token)
            dispatch(fetchUserDetails(token))
    }


    return (
        <SafeAreaView style={GlobalStyles.OuterContainer}>
            {
                !userDetails && <ActivityIndicator />
            }
            <View style={GlobalStyles.TopRightFloatingButtonContainer}>
                <TouchableOpacity onPress={() => {
                    dispatch(logoutAction());
                    props.navigation.replace(Consts.LOGIN_SCREEN)}
                }>
                    <Text style={GlobalStyles.fontBoldAndBlue}>{Consts.LOGOUT}</Text>
                </TouchableOpacity>
            </View>
            <View style={GlobalStyles.TopImageContainer}>
                <Image 
                    source={require('../../resources/media/whiteborder.png')}
                    style={GlobalStyles.TopImage}
                />
            </View>
            <View style={GlobalStyles.InnerContainer}>
                {
                    userDetails &&
                    <View>
                        <View style={GlobalStyles.CardContainer}>
                            <View style={GlobalStyles.AlignCenter}>
                                <Text style={GlobalStyles.fontMainHeading}>
                                    { userDetails.name }
                                </Text>
                                {
                                    userDetails.gender &&
                                    <Text>
                                        { userDetails.gender }
                                    </Text>
                                }
                                <View style={Styles.SocailMediaContainer}>
                                        {
                                            
                                            userDetails.facebook_link &&
                                            <Icon
                                                name={'facebook'}
                                                size={26}
                                                color={"#3b5998"}
                                                style={Styles.SocialMediaIcon}
                                                onPress={() => Linking.openURL(userDetails.facebook_link)}
                                            />
                                        }
                                        {
                                            
                                            userDetails.twitter_link &&
                                            <Icon
                                                name={'twitter'}
                                                size={26}
                                                color={"#00acee"}
                                                style={Styles.SocialMediaIcon}
                                                onPress={() => Linking.openURL(userDetails.twitter_link)}
                                            />
                                        }
                                        {
                                            
                                            userDetails.linkedin_link &&
                                            <Icon
                                                name={'linkedin'}
                                                size={26}
                                                color={"#0e76a8"}
                                                style={Styles.SocialMediaIcon}
                                                onPress={() => Linking.openURL(userDetails.linkedin_link)}
                                            />
                                        }
                                </View>
                                <View>
                                    <View style={Styles.ContactDetailsTopRow}>
                                        <Icon
                                            name="email"
                                            size={22}
                                        />
                                        <TouchableOpacity
                                            onPress = {() => Linking.openURL('mailto:' + userDetails.email)}
                                        >
                                            <Text style={{
                                                    textDecorationLine: 'underline',
                                                    color: 'blue'
                                            }}>
                                                {userDetails.email}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    {
                                        userDetails.mobile_number &&
                                        <View style={Styles.ContactDetailsRow}>
                                            <Icon
                                                name="phone"
                                                size={22}
                                            />
                                            <TouchableOpacity
                                                onPress = {() => Linking.openURL('tel:' + userDetails.mobile_number)}
                                            >
                                                <Text style={{
                                                    textDecorationLine: 'underline'
                                                }}>
                                                    {userDetails.mobile_number}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                }
            </View>
        </SafeAreaView>
    );
}