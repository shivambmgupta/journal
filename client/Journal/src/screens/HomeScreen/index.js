import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    AppState,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    RefreshControl
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './Style';
import GlobalStyles from '../../util/GlobalStyles'
import { fetchJournals } from '../../redux/actions'
import * as Consts from '../../constants/Constants'
import ActivityIndicator from '../../components/ActivityIndicator';
import { formatDate } from '../../util/common';
import * as config from '../../constants/config.json';

export default (props) => {
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);
    const dispatch = useDispatch();
    const userData = useSelector(state => state.reducer);
    const token = useSelector(state => state.reducer.token);
    const [user, setUser] = useState(userData?.user);
    const [refershing, setRefreshing] = useState(false);

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
        setRefreshing(false);
        const { user } = userData || [];
        if (config.renderJournalInSortedOrder) {
            user?.journals?.sort((left, right) => (
                new Date(right?.date).getTime() - new Date(left?.date).getTime()
            ));
        }
        setUser(user);
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
    };

    const refresh = () => {
        setRefreshing(true);
        setUser(null);
        getJournals();
    }

    return (
        <SafeAreaView style={GlobalStyles.OuterContainer}>
            {
                !user && !refershing && <ActivityIndicator />
            }
            <View style={GlobalStyles.TopImageContainer}>
                <Image
                    source={require('../../resources/media/whiteborder.png')}
                    style={GlobalStyles.TopImage}
                />
            </View>
            <View style={GlobalStyles.InnerContainer}>
                <View style={Styles.ScrollViewParentContainer}>
                    <ScrollView
                        contentContainerStyle={Styles.ScrollViewContentContainer}
                        refreshControl={
                            <RefreshControl
                                refreshing={refershing}
                                onRefresh={refresh}
                            />
                        }
                    >
                        {
                            user?.journals?.map((journal) => {
                                return (
                                    <TouchableOpacity
                                        key={journal?._id}
                                        style={[GlobalStyles.CardContainer, Styles.CardContainer]}
                                        onPress={() => props.navigation.navigate(Consts.JOURNAL_SCREEN, { mode: Consts.EXISTING, journal })}
                                    >
                                        <View style={Styles.CardTitle}>
                                            <Text style={GlobalStyles.fontBold}>{journal.title}</Text>
                                            <Text style={[GlobalStyles.fontBold, { fontSize: 10 }]}>{formatDate(new Date(journal.date))}</Text>
                                        </View>
                                        <Text style={{
                                            marginTop: 10,
                                            maxHeight: '75%'
                                        }}>{journal.body}</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                        {
                            (user && (!user.journals || user?.journals?.length == 0)) &&
                            <View style={GlobalStyles.CardContainer}>
                                <Text>{Consts.EMPTY}</Text>
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