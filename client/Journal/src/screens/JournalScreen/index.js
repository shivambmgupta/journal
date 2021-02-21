import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native'
import GlobalStyles from '../../util/GlobalStyles';
import Styles from './Style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ActivityIndicator from '../../components/ActivityIndicator'
import Services from '../../services';
import { useSelector } from 'react-redux'
import * as Consts from '../../constants/Constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Colors from '../../constants/Colors';
const { height, width } = Dimensions.get('window')

// For new journal editable is true as default
// For existing journal editable is false as default


export default (props) => {
    const token = useSelector(state => state.reducer.token)
    const mode = props.route?.params?.mode;
    const isExistingMode = mode === Consts.EXISTING
    const [title, setTitle] = useState(isExistingMode ? props.route?.params?.journal?.title : null);
    const [body, setBody] = useState(isExistingMode ? props.route?.params?.journal?.body : null);
    const [editable, setEditability] = useState(isExistingMode ? false : true)
    const [activity, setActivity] = useState(false);

    const deleteConfirmed = () => {
        const journal = props.route?.params?.journal
        setActivity(true)
        Services.deleteJournal(journal._id, token, (response) => {
            setActivity(false)
            if (response.status === 202)
                props.navigation.goBack();
        });
    }

    const handleDeleteButtonPress = () => {
        Alert.alert(
            Consts.DELETE_TITLE,
            Consts.DELETE_ALERT,
            [
                {
                    "text": Consts.CANCEL,
                    onPress: () => console.log("cancel Pressed"),
                    style: 'cancel'
                },
                {
                    "text": Consts.PROCEED,
                    onPress: () => deleteConfirmed()
                },
            ],
            { cancelable: false }
        )
    }

    const handleSaveButtonPress = () => {
        setActivity(true)
        if (isExistingMode) {
            const journal = props.route?.params?.journal
            Services.updateJournal(
                journal._id,
                {
                    "journal": {
                        "title": title,
                        "body": body
                    }
                },
                token,
                (response) => {
                    setActivity(false)
                    if (response.status == 200) props.navigation.goBack();
                }
            )
        } else {
            Services.createJournal(
                {
                    "journal": {
                        "title": title,
                        "body": body
                    }
                },
                token,
                (response) => {
                    setActivity(false)
                    if (response.status == 201) props.navigation.goBack()
                    else {
                        // handle save failure
                    }
                }
            )

        }
    }

    const handleCancelPress = () => {
        if (isExistingMode) {
            if (!editable)
                props.navigation.goBack()
            else {
                setEditability(!editable)
                setBody(props.route.params.journal.body)
                setTitle(props.route.params.journal.title ? props.route.params.journal.title : '')
            }
        } else props.navigation.goBack();
    }

    return (
        <SafeAreaView style={GlobalStyles.OuterContainer}>
            {
                activity && <ActivityIndicator />
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
                        contentContainerStyle={[
                            GlobalStyles.CardContainer,
                            Styles.ScrollViewContentContainer
                        ]}>
                        <View style={Styles.HeaderView}>
                            {
                                !editable &&
                                <TouchableOpacity
                                    onPress={handleDeleteButtonPress}
                                    style={[Styles.RoundButton, Styles.DeleteButton]}>
                                    <Icon
                                        name={'delete'}
                                        size={16}
                                        color={Colors.WHITE}
                                    />
                                </TouchableOpacity>
                            }
                            <View style={Styles.TitleContainer}>
                                <Text style={Styles.TitleText}>
                                    { Consts.JOURNAL_SCREEN_TITLE }    
                                </Text>
                            </View>
                            {
                                !editable &&
                                <TouchableOpacity
                                    onPress={() => {
                                        setEditability(!editable)
                                    }}
                                    style={[Styles.RoundButton, Styles.EditButton]}>
                                    <Icon
                                        name={'comment-edit'}
                                        size={16}
                                        color={Colors.WHITE}
                                    />
                                </TouchableOpacity>
                            }
                        </View>
                        <Input
                            placeholder={Consts.PLACEHOLDER_TITLE}
                            value={title}
                            editable={editable}
                            style={{
                                color: editable ? Colors.BLACK : Colors.GREY
                            }}
                            onChangeText={(value) => setTitle(value)}
                        />
                        <Input
                            placeholder={Consts.PLACEHOLDER_CONTENT}
                            multiline={true}
                            value={body}
                            editable={editable}
                            style={{
                                color: editable ? Colors.BLACK : Colors.GREY
                            }}
                            numberOfLines={20}
                            textAlignVertical="top"
                            onChangeText={(value) => setBody(value)}
                        />
                        <View style={Styles.BottomButtonContanier}>
                            <Button
                                title={Consts.CANCEL}
                                onPress={handleCancelPress}
                            />
                            {
                                editable &&
                                <Button
                                    title={Consts.SAVE}
                                    onPress={handleSaveButtonPress}
                                />
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}