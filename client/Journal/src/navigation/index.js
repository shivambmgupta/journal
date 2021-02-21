import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MAIN_THEME_COLOR, GREY } from '../constants/Colors'; 
import * as Consts from '../constants/Constants';

// Importing Screens
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutDev from '../screens/AboutDev';
import SplashScreen from '../screens/SplashScreen';
import JournalScreen from '../screens/JournalScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const HomeStackNavigator = (props) => {
    return (
        <HomeStack.Navigator mode="card" headerMode="none">
            <HomeStack.Screen
                name = {Consts.HOME_SCREEN}
                component = {HomeScreen}
                parmas = {props?.route?.params}
                options = {{ 
                    headerTransparent: false  
                }} 
            />
            <HomeStack.Screen
                name = {Consts.JOURNAL_SCREEN}
                component = {JournalScreen}
                options = {{ 
                    headerTransparent: false  
                }} 
            />
        </HomeStack.Navigator>
    );
}

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === Consts.HOME_STACK) {
                        iconName = 'home-variant';
                    } else if (route.name === Consts.PROFILE_SCREEN) {
                        iconName = 'account-circle';
                    } else if (route.name === Consts.APP_DEVELOPER) {
                        iconName = 'emoticon-excited'
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: MAIN_THEME_COLOR,
                inactiveTintColor: GREY,
            }}

        >
            <Tab.Screen name={Consts.HOME_STACK} component={HomeStackNavigator} />
            <Tab.Screen name={Consts.PROFILE_SCREEN} component={ProfileScreen} />
            <Tab.Screen name={Consts.APP_DEVELOPER} component={AboutDev} />
        </Tab.Navigator>
    );
}

export default OnBoardStackNavigator = () => (
    <Stack.Navigator mode="card" headerMode="none">
        <Stack.Screen 
            name = {Consts.SPLASH_SCREEN}
            component = {SplashScreen}
            options = {{ 
                headerTransparent: false  
            }}
        />
        <Stack.Screen 
            name = {Consts.LOGIN_SCREEN}
            component = {LoginScreen}
            options = {{ 
                headerTransparent: false  
            }}
        />
        <Stack.Screen 
            name = {Consts.REGISTER_SCREEN}
            component = {RegisterScreen}
            options = {{ 
                headerTransparent: false  
            }}
        />
        <Stack.Screen 
            name = {Consts.APP}
            component = {BottomNavigator}
            options = {{ 
                headerTransparent: false  
            }}
        />
    </Stack.Navigator>
);