import { Ionicons } from '@expo/vector-icons';

import React from 'react';

import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import HeaderButton from '../components/HeaderButtonNavigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingScreen from '../screens/SettingsScreen';

import SideBarMenu from './SideBarMenu';

const Home = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerLeft: <HeaderButton navigationProps={navigation} />,
            // headerTintColor: 'black',
            headerStyle: {
                backgroundColor: '#4ECDC4',
                elevation: 0,
                showdownOpacity: 0
            }
        })
    }
});

const Link = createStackNavigator({
    Link: {
        screen: LinksScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Chat',
            headerLeft: <HeaderButton navigationProps={navigation} />,
            // headerTintColor: '#8B1A1A',
            headerStyle: {
                backgroundColor: '#4ECDC4',
                elevation: 0,
                showdownOpacity: 0
            }
        })
    }
});


const Setting = createStackNavigator({
    Setting: {
        screen: SettingScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Setting',
            headerLeft: <HeaderButton navigationProps={navigation} />,
            // headerTintColor: '#8B1A1A',
            headerStyle: {
                backgroundColor: '#4ECDC4',
                elevation: 0,
                showdownOpacity: 0
            }
        }),
    },
});


const tabNav = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            gesturesEnabled: false,
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-home'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
    Link: {
        screen: Link,
        navigationOptions: () => ({
            gesturesEnabled: false,
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-chatboxes'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
    Setting: {
        screen: Setting,
        navigationOptions: () => ({
            gesturesEnabled: false,
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-chatboxes'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
},
    {
        gesturesEnabled: false,
        // swipeEnabled: false,
        tabBarOptions: {
            style: {
                backgroundColor: '#556270',
            },
            activeTintColor: 'rgba(255, 255, 255, 0.9)',
            inactiveTintColor: '#008B8B',
        }
    })


const stackNavigation = createStackNavigator({
    Tabs: tabNav
},
    {
        headerMode: 'none',
    });


    
const drawerNavigation = createDrawerNavigator({
    Home: {
        screen: stackNavigation,
        navigationOptions: () => ({
            drawerIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-home'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
    Setting: {
        screen: Setting,
        navigationOptions: () => ({
            drawerIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-settings'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
    Link: {
        screen: Link,
        navigationOptions: () => ({
            drawerIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-help-circle'
                        size={28}
                        color={tintColor}
                    />
                );
            }
        })
    },
}, {
        contentComponent: SideBarMenu
    });

export default createAppContainer(drawerNavigation);