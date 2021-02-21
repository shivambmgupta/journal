import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import Styles from './Style';
import GlobalStyles from '../../util/GlobalStyles';
import * as Consts from '../../constants/Constants';
import Storage from '../../util/Storage';
import { retrieveTokenToStore } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

export default (props) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.reducer.token )
    
    useEffect(() => {
        Storage.getItem("token")
            .then(token => {
                token
                ? dispatch(retrieveTokenToStore(token))
                : setTimeout(() => props.navigation.navigate(Consts.LOGIN_SCREEN), Consts.SPLASH_SCREEN_DURARION)        
            })
            .catch(err => {
                setTimeout(() => props.navigation.navigate(Consts.LOGIN_SCREEN), Consts.SPLASH_SCREEN_DURARION)
            })   
    }, [])
    
    useEffect(() => {
        if(token)
            setTimeout(
                () => props.navigation.navigate(Consts.APP, { screen: Consts.HOME_STACK }), 
                Consts.SPLASH_SCREEN_DURARION
            )
    }, [token])

    return (
        <SafeAreaView style={Styles.OuterContainer}>
            <View style={Styles.BackGroundImageContainer}>
                <Image 
                    source={require('../../resources/media/whiteborder.png')} 
                    style={Styles.BackgroundImage}
                />
            </View>
            <View style={Styles.ForegroundImageContainer}>
                <Image 
                    source={require('../../resources/media/splash.png')}
                    style={Styles.ForegroundImage}
                />
            </View>
            <View>
                <Text style={Styles.TitleText}>
                    {Consts.APP_TITLE}
                </Text>
            </View>
            <View style={Styles.CopyrightView}>
                <Text style={[GlobalStyles.fontWhiteText, GlobalStyles.fontBold]}>
                    {Consts.COPYRIGHT_TEXT}
                </Text>
            </View>
        </SafeAreaView>
    )
}