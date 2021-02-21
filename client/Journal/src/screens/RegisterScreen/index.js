import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import GlobalStyles from '../../util/GlobalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button'
import Styles from './Style';
import Validators from '../../util/Validators'
import PromptText from '../../components/PromptText';
import * as Consts from '../../constants/Constants';
import Services from '../../services/';
import ToastMessage from '../../components/ToastMessage';
import ActivityIndicator from '../../components/ActivityIndicator';

const { width, height } = Dimensions.get('window');

export default (props) => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [registerationFailed, setRegisterationFailed] = useState(null);
    const [activity, setActivity] = useState(false)

    const registerButtonEnability = () => {
        return !(
            user.name && !error.nameError
            && user.email && !error.emailError
            && user.password && !error.passwordError
            && !error.confirmPasswordError
        )
    }

    const onRegisterButtonPress = () => {
        const { name, email, password } = user
        var payload = { name, email, username: email, password }

        // Inlcude social media link, only when they are valid

        if (user.mobileNumber && !error.mobileNumberError)
            payload = { ...payload, mobile_number: user.mobileNumber }
        if (user.facebookLink && !error.facebookLinkError)
            payload = { ...payload, facebook_link: user.facebookLink }
        if (user.twitterLink && !error.twitterLinkError)
            payload = { ...payload, twitter_link: user.twitterLink }
        if (user.linkedinLink && !error.linkedInLinkError)
            payload = { ...payload, linkedin_link: user.linkedinLink }

        setActivity(true)
        Services.register(payload, (response) => {
            setActivity(false)
            if (response.status === 201)
                props.navigation.navigate(Consts.LOGIN_SCREEN);
            else {
                useState(setRegisterationFailed(true))
                setTimeout(() => setRegisterationFailed(false), 3000);
            }
        });
    }

    return (
        <SafeAreaView style={GlobalStyles.OuterContainer}>
            { 
                activity && <ActivityIndicator message = "Please wait..." />
            }
            <View style={GlobalStyles.TopImageContainer}>
                <Image
                    source={require('../../resources/media/whiteborder.png')}
                    style={GlobalStyles.TopImage}
                />
            </View>
            <View style={Styles.RegisterButton}>
                <Text style={Styles.RegisterButtonText}>
                    {Consts.REGISTER_SCREEN_TITLE}
                </Text>
            </View>
            <View style={GlobalStyles.InnerContainer}>
                <View style={Styles.CenterAligned}>
                    <View style={Styles.ScrollViewParentContainer}>
                        {
                            registerationFailed &&
                            <View style={Styles.CenterAligned}>
                                <ToastMessage text="Oops, something went wrong. Please try with different email." />
                            </View>
                        }
                        <ScrollView contentContainerStyle={Styles.ScrollViewContainer}>
                            <Input
                                placeholder={Consts.PLACHOLDER_NAME}
                                onChangeText={(value) => {
                                    setUser({ ...user, name: value })
                                    if (!Validators.isAlphabetWithSpace(value))
                                        setError({ ...error, nameError: Consts.NAME_ERROR })
                                    else
                                        setError({ ...error, nameError: null })
                                }}
                            />
                            {
                                error.nameError &&
                                <PromptText
                                    type={Consts.PROMPT_TYPE_ERROR}
                                    text={error.nameError}
                                />
                            }
                            <Input
                                placeholder={Consts.PLACEHOLDER_USERNAME}
                                onChangeText={(value) => {
                                    setUser({ ...user, email: value.trim().toLowerCase() })
                                    if (!Validators.validEmail(value))
                                        setError({ ...error, emailError: Consts.MAIL_ERROR })
                                    else
                                        setError({ ...error, emailError: null })
                                }}
                            />
                            {
                                error.emailError &&
                                <PromptText type={Consts.PROMPT_TYPE_ERROR} text={error.emailError} />
                            }
                            <Input
                                placeholder={Consts.PLACEHOLDER_PASSWORD}
                                secureTextEntry={true}
                                onChangeText={(value) => {
                                    setUser({ ...user, password: value })
                                    if (!Validators.passwordPolicy(value))
                                        setError({ ...error, passwordError: Consts.PASSWORD_ERROR })
                                    else
                                        setError({ ...error, passwordError: null })
                                }}
                            />
                            {
                                error.passwordError &&
                                <PromptText type={Consts.PROMPT_TYPE_ERROR} text={error.passwordError} />
                            }
                            <Input
                                placeholder={Consts.PLACEHOLDER_CONFIRM_PASWORD}
                                secureTextEntry={true}
                                onChangeText={(value) => {
                                    setUser({ ...user, confirmPassword: value })
                                    if (value !== user.password)
                                        setError({ ...error, confirmPasswordError: Consts.CONFIRM_PASSWORD_ERROR })
                                    else
                                        setError({ ...error, confirmPasswordError: null })

                                }}
                            />
                            {
                                error.confirmPasswordError &&
                                <PromptText type={Consts.PROMPT_TYPE_ERROR} text={error.confirmPasswordError} />
                            }
                            <Input
                                placeholder={Consts.PLACEHOLDER_MOBILE}
                                onChangeText={(value) => {
                                    setUser({ ...user, mobileNumber: value })
                                    if (!Validators.isValidMobileNumber(value))
                                        setError({ ...error, mobileNumberError: Consts.MOBILE_NUMBER_ERROR })
                                    else
                                        setError({ ...error, mobileNumberError: null })
                                }}
                            />
                            {
                                error.mobileNumberError &&
                                <PromptText type={Consts.PROMPT_TYPE_ERROR} text={error.mobileNumberError} />
                            }
                            <Input
                                placeholder={Consts.PLACEHOLDER_FACEBOOK_LINK}
                                onChangeText={(value) => {
                                    setUser({ ...user, facebookLink: value })
                                    if (!Validators.isValidFacebookLink(value))
                                        setError({ ...error, facebookLinkError: Consts.LINK_ERROR })
                                    else
                                        setError({ ...error, facebookLinkError: null })

                                }}
                            />
                            {
                                error.facebookLinkError &&
                                <PromptText type={Consts.PROMPT_TYPE_ERROR} text={error.facebookLinkError} />
                            }
                            <Input
                                placeholder={Consts.PLACEHOLDER_TWITTER_LINK}
                                onChangeText={(value) => {
                                    setUser({ ...user, twitterLink: value })
                                    if (!Validators.isValidTwitterLink(value))
                                        setError({ ...error, twitterLinkError: Consts.LINK_ERROR })
                                    else
                                        setError({ ...error, twitterLinkError: null })

                                }}
                            />
                            {
                                error.twitterLinkError &&
                                <PromptText type={Consts.PROMPT_TYPE_ERROR} text={error.twitterLinkError} />
                            }
                            <Input
                                placeholder={Consts.PLACEHOLDER_LINKEDIN_LINK}
                                onChangeText={(value) => {
                                    setUser({ ...user, linkedinLink: value })
                                    if (!Validators.isValidLinkdedinLink(value))
                                        setError({ ...error, linkedInLinkError: Consts.LINK_ERROR })
                                    else
                                        setError({ ...error, linkedInLinkError: null })

                                }}
                            />
                            {
                                error.linkedInLinkError &&
                                <PromptText type={Consts.PROMPT_TYPE_ERROR} text={error.linkedInLinkError} />
                            }
                            {/* This is extra view gurantees that scroll view scrolls completely down */}
                            <View style={{ height: 100 }} />
                        </ScrollView>
                        <View style={Styles.FooterContainer}>
                            <Button
                                title={Consts.REGISTER}
                                disabled={registerButtonEnability()}
                                onPress={onRegisterButtonPress}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}