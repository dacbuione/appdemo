// import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';


// import AppNavigator from './src/navigation/AppNavigator';
// import ForgetPassScreen from './src/screens/ForgetPassScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import MainScreen from './src/navigation/MainDrawerBar';


// const MenuBar = (props) => (
//   <MainScreen {...props}></MainScreen>
// )

// const login = createStackNavigator({
//   Login: { screen: LoginScreen },
//   ForgetPass: { screen: ForgetPassScreen }
// },
//   {
//     navigationOptions: ({ header: null })
//   })

// const main = createStackNavigator({
//   Main: {
//     screen: AppNavigator,

//     navigationOptions: ({ navigation }) => ({ header: null })
//   }
// },
//   {
//     navigationOptions: ({ header: null })
//   }
// )
// const drawerApp = createSwitchNavigator({
//   Drawer: { screen: MenuBar}
// },
//   {
//     initialRouteName: 'Drawer',
//     //headerMode:'none'
//   })

// const myApp = createStackNavigator({
//   loginStack: { screen: login },
//   mainStack: { screen: main },
//   drawer: { screen: drawerApp }

// },
//   {
//     initialRouteName: 'loginStack'
//   })

// export default createAppContainer(myApp);

import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';


import MainDrawerBar from './src/navigation/MainDrawerBar';
import ForgetPassScreen from './src/screens/ForgetPassScreen';
import LoginScreen from './src/screens/LoginScreen';



const login = createStackNavigator({
    Login: { screen: LoginScreen },
    ForgetPass: { screen: ForgetPassScreen }
},
    {
        navigationOptions: ({ header: null })
    })

const main = createStackNavigator({
    Main: {
        screen: MainDrawerBar,
        navigationOptions: ({ navigation }) => ({ header: null })
    }
},
    {
        navigationOptions: ({ header: null })
    }
)

const myApp = createStackNavigator({
    loginStack: { screen: login },
    mainStack: { screen: main }
},
    {
        initialRouteName: 'loginStack'
    })

export default createAppContainer(myApp);