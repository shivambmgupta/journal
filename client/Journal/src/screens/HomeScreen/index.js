import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    AppState,
    SafeAreaView,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './Style';
import GlobalStyles from '../../util/GlobalStyles'
import { fetchJournals } from '../../redux/actions'
import * as Consts from '../../constants/Constants'
const { height, width } = Dimensions.get('window');

export default (props) => {
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);
    const dispatch = useDispatch();
    const userData = useSelector(state => state.reducer);
    const token = useSelector(state => state.reducer.token);
    const [user, setUser] = useState(userData?.user);

    // Every time app comes in foregrond, or home screen comes in foucs, we want refresh

    useEffect(() => {
        AppState.addEventListener("change", _handleAppStateChange);
        const unsubsribe = props.navigation.addListener('focus', getJournals);
        return () => {
            unsubsribe();
            AppState.removeEventListener("change", _handleAppStateChange);
        }
    }, [])

    useEffect(() => getJournals(), [token])

    useEffect(() => {
        setUser(userData?.user);
    }, [userData])

    const getJournals = () => {
        if (token)
            dispatch(fetchJournals(token));
    }

    const _handleAppStateChange = (nextAppState) => {
        if (
            appState.current.match(/inactive|background/) &&
            nextAppState === "active"
        ) {
            // App has come into foreground
            getJournals();
        }

        appState.current = nextAppState;
        setAppStateVisible(appState.current);
    }

    const handleAddJournalButtonPress = () => {
        props.navigation.navigate(Consts.JOURNAL_SCREEN, { mode: "new" })
    }

    return (
        <SafeAreaView style={GlobalStyles.OuterContainer}>
            <View style={GlobalStyles.TopImageContainer}>
                <Image
                    source={require('../../resources/media/whiteborder.png')}
                    style={GlobalStyles.TopImage}
                />
            </View>
            <View style={GlobalStyles.InnerContainer}>
                <View style={Styles.ScrollViewParentContainer}>
                    <ScrollView contentContainerStyle={Styles.ScrollViewContentContainer}>
                        {
                            user?.journals?.map((journal) => {
                                return (
                                    <TouchableOpacity 
                                        key={journal?._id} 
                                        style={GlobalStyles.CardContainer}
                                        onPress={() => props.navigation.navigate(Consts.JOURNAL_SCREEN, { mode: Consts.EXISTING, journal })}
                                    >
                                        <Text style={GlobalStyles.fontBold}>{journal.title}</Text>
                                        <Text style={{
                                            marginTop: 10
                                        }}>{ journal.body }</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                        {
                            (user && (!user.journals || user?.journals?.length == 0)) &&
                            <View style={GlobalStyles.CardContainer}>
                                <Text >{ Consts.EMPTY }</Text>
                            </View>
                        }
                        {/* This is extra view gurantees that scroll view scrolls completely down */}
                        <View style={{ height: 100 }} />
                    </ScrollView>
                    <TouchableOpacity onPress={handleAddJournalButtonPress} style={Styles.RoundFixedButton}>
                        <Text style={{ color: 'white', fontSize: 50, fontWeight: "bold" }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}