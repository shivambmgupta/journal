import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    AppState,
    ScrollView,
    Linking
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction, fetchDeveloperDetails } from '../../redux/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GlobalStyles from '../../util/GlobalStyles';
import Styles from './Style';
import ActivityIndicator from '../../components/ActivityIndicator';
import * as Consts from '../../constants/Constants';

export default (props) => {
    const dispatch = useDispatch();
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);

    const aboutDev = useSelector(state => state.reducer.aboutDev)

    useEffect(() => {
        getDeveloperDetails();
        AppState.addEventListener('change', _handleAppStateChange);
        const unsubsribe = props.navigation.addListener('focus', getDeveloperDetails)
        return () => {
            unsubsribe();
            AppState.removeEventListener('change', _handleAppStateChange);
        }
    }, []);

    const _handleAppStateChange = (nextAppState) => {
        if (appState.current.match(/inactive|background/)
            && nextAppState === 'active'
        )
            getDeveloperDetails();
        appState.current = nextAppState;
        setAppStateVisible(appState.current);
    }

    const getDeveloperDetails = () => {
        dispatch(fetchDeveloperDetails());
    }

    return (
        <SafeAreaView style={GlobalStyles.OuterContainer}>
            {
                !aboutDev && <ActivityIndicator />
            }
            <View style={GlobalStyles.TopRightFloatingButtonContainer}>
                <TouchableOpacity onPress={() => {
                    dispatch(logoutAction());
                    props.navigation.replace(Consts.LOGIN_SCREEN);
                }}>
                    <Text style={GlobalStyles.fontBoldAndBlue}>{Consts.LOGOUT}</Text>
                </TouchableOpacity>
            </View>
            <View style={GlobalStyles.TopImageContainer}>
                <Image
                    source={require('../../resources/media/whiteborder.png')}
                    style={GlobalStyles.TopImage}
                />
            </View>
            <View style={GlobalStyles.InnerContainer} >
                <View style={Styles.ScrollViewParentContainer}>
                    {
                        aboutDev &&
                        <ScrollView contentContainerStyle={Styles.ScrollViewContentContainer}>
                            <View style={GlobalStyles.CardContainer}>
                                <View style={GlobalStyles.AlignCenter}>
                                    <Text style={GlobalStyles.fontMainHeading}>
                                        {aboutDev.name}
                                    </Text>
                                    <Text>
                                        {`${aboutDev.gender} | ${aboutDev.age}`}
                                    </Text>
                                    <View style={Styles.SocailMediaContainer}>
                                        {
                                            aboutDev.social_media?.map(platform => {
                                                return (
                                                    <Icon
                                                        key={platform.title}
                                                        name={platform.icon}
                                                        size={26}
                                                        color={platform.color}
                                                        style={Styles.SocialMediaIcon}
                                                        onPress={() => Linking.openURL(platform.link)}
                                                    />
                                                );
                                            })
                                        }
                                    </View>
                                    <View>
                                        <View style={Styles.ContactDetailsTopRow}>
                                            <Icon
                                                name="email"
                                                size={22}
                                            />
                                            <TouchableOpacity
                                                onPress={() => Linking.openURL('mailto:' + aboutDev.mail)}
                                            >
                                                <Text style={{
                                                    textDecorationLine: 'underline',
                                                    color: 'blue'
                                                }}>
                                                    {aboutDev.mail}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={Styles.ContactDetailsRow}>
                                            <Icon
                                                name="phone"
                                                size={22}
                                            />
                                            <TouchableOpacity
                                                onPress={() => Linking.openURL('tel:' + aboutDev.contact)}
                                            >
                                                <Text style={{
                                                    textDecorationLine: 'underline'
                                                }}>
                                                    {aboutDev.contact}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {
                                aboutDev.about &&
                                <View style={GlobalStyles.CardContainer}>
                                    <Text style={Styles.CardTitle}>
                                        {aboutDev.about.title}
                                    </Text>
                                    <Text style={Styles.CardBody}>
                                        {aboutDev.about.body}
                                    </Text>
                                </View>
                            }
                            {
                                aboutDev.aboutProject &&
                                <View style={GlobalStyles.CardContainer}>
                                    <Text style={Styles.CardTitle}>
                                        {aboutDev.aboutProject.title}
                                    </Text>
                                    <Text style={Styles.CardBody}>
                                        {aboutDev.aboutProject.body}
                                    </Text>
                                </View>
                            }
                            {
                                aboutDev.technologies &&
                                <View style={[GlobalStyles.CardContainer, GlobalStyles.RowAndWrapperContainer]}>
                                    {
                                        aboutDev.technologies.map((technology) => {
                                            return (
                                                <View
                                                    key={technology.title}
                                                    style={[Styles.TechnologyTag, { backgroundColor: technology.background }]}
                                                >
                                                    <Text style={[GlobalStyles.fontBold, { color: technology.foreground }]}>{technology.title}</Text>
                                                </View>
                                            );
                                        })
                                    }
                                </View>

                            }
                            {/* This extra view gurantees that scroll view scrolls completely to the down */}
                            <View style={{ height: 100 }} />
                        </ScrollView>
                    }
                </View>
            </View>
        </SafeAreaView>
    );
}