import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import Style from './Style.js';
import Input from '../../components/Input'
import Button from '../../components/Button'
import ToastMessage from '../../components/ToastMessage'
import PromptText from '../../components/PromptText'
import * as Consts from '../../constants/Constants'
import ActivityIndicator from '../../components/ActivityIndicator'
import BackGroundSVG from '../../resources/media/Confetti-Doodles.svg';
import Validators from '../../util/Validators';
import { loginAction } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyles from '../../util/GlobalStyles'

export default LoginScreen = (props) => {
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [userEmailError, setUserEmailError] = useState(null);
    const token = useSelector(state => state?.reducer?.token);
    const invalidCredentials = useSelector(state => state?.reducer?.invalidCredentials);
    const [activity, setActivity] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        setActivity(false);
        if (token) {
            props.navigation.navigate(Consts.APP, { screen: Consts.HOME_STACK });
        }
    }, [token, invalidCredentials])

    if (invalidCredentials) {
        setTimeout(() => {
            dispatch({ type: Consts.INVALID_CREDENTIALS_RESET })
        }, 2000)
    }

    const onEmailChange = (value) => {
        setUserEmail(value.toLowerCase());
        if (!Validators.validEmail(value)) setUserEmailError(Consts.INVALID_EMAIL);
        else setUserEmailError(null);
    }

    const onPasswordChange = (value) => {
        setUserPassword(value);
    }

    const onSubmit = () => {
        setActivity(true);
        dispatch(loginAction({
            email: userEmail,
            password: userPassword
        }));
    }

    const shouldDisabled = () => {
        return !(userEmail != null && (userPassword != null && userPassword.length != 0) && userEmailError == null)
    }

    return (
        <View style={Style.OuterContainer}>
            {
                activity && <ActivityIndicator />
            }
            <View style={GlobalStyles.TopImageContainer}>
                <Image
                    source={require('../../resources/media/whiteborder.png')}
                    style={GlobalStyles.TopImage}
                />
            </View>
            <View style={Style.InnerContainer}>
                <Input
                    placeholder={Consts.PLACEHOLDER_USERNAME}
                    autoCapitalize="none"
                    onChangeText={onEmailChange}
                />
                {
                    userEmailError &&
                    <PromptText type={Consts.PROMPT_TYPE_ERROR} text={userEmailError} />
                }
                <Input
                    placeholder={Consts.PLACEHOLDER_PASSWORD}
                    autoCapitalize="none"
                    onChangeText={onPasswordChange}
                    secureTextEntry={true}
                />
                {
                    invalidCredentials &&
                    <PromptText type={Consts.PROMPT_TYPE_ERROR} text={"Invalid credentials!"} />
                }
                <Button
                    title={Consts.SIGN_IN}
                    disabled={shouldDisabled()}
                    onPress={onSubmit}
                />
                <View style={Style.SeparatorLine} />
                <Button
                    title={Consts.REGISTER}
                    onPress={() => props.navigation.navigate(Consts.REGISTER_SCREEN)}
                />
            </View>
        </View>
    );
} 