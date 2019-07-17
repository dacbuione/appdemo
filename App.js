import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabBar from './src/navigation/MainTabBar';
import ForgetPassScreen from './src/screens/ForgetPassScreen';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';



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
  mainStack: { screen: main }
},
  {
    initialRouteName: 'splashScreen'
  })
export default createAppContainer(myApp);