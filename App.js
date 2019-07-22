import React, { Component } from 'react';

import { View, Text, navigateBack } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabBar from './src/navigation/MainTabBar';
import ForgetPassScreen from './src/screens/ForgetPassScreen';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';
import SettingAccount from './src/screens/SettingAccount';
import ChangePassScreen from './src/screens/ChangePassScreen';
import ChangeInfoScreen from './src/screens/ChangeInfoScreen';




const login = createStackNavigator({
    Login: { screen: LoginScreen },
    ForgetPass: { screen: ForgetPassScreen }
},
    {
        navigationOptions: ({ header: null })
    })

const main = createStackNavigator({
    Main: {
        screen: MainTabBar,
        navigationOptions: ({ navigation }) => ({ header: null })
    }
},
    {
        navigationOptions: ({ header: null })
    }
)

const myApp = createStackNavigator({
  splashScreen:{screen: SplashScreen},
  loginStack: { screen: login },
  mainStack: { screen: main },
  settingAccount: {screen:SettingAccount},
  changePass:{screen:ChangePassScreen},
  changeInfo:{screen:ChangeInfoScreen},
},
  {
    initialRouteName: 'splashScreen'
  })
export default createAppContainer(myApp);