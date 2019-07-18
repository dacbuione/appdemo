import { Ionicons } from '@expo/vector-icons';

import React from 'react';

import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import HeaderButton from '../components/HeaderButtonNavigation';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';

import SideBarMenu from './SideBarMenu';


//khai báo màn hình của sidebar
const Home = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Trang chủ',
            headerLeft: <HeaderButton navigationProps={navigation} />,
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
            title: 'Cài đặt',
            headerLeft: <HeaderButton navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#4ECDC4',
                elevation: 0,
                showdownOpacity: 0
            }
        })
    }
});


const Profile = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Tôi',
            headerLeft: <HeaderButton navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#4ECDC4',
                elevation: 0,
                showdownOpacity: 0
            }
        }),
    },
});

//màn hình của tabbar
const tabNav = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            gesturesEnabled: false,
            title: 'Trang chủ',
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
    Setting: {
        screen: Setting,
        navigationOptions: () => ({
            gesturesEnabled: false,
            title: 'Cài đặt',
            tabBarIcon: ({ tintColor }) => {
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
    Account: {
        screen: Profile,
        navigationOptions: () => ({
            gesturesEnabled: false,
            title: 'Tôi',
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-person'
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
                backgroundColor: 'white',
            },
            activeTintColor: '#008B8B',
            inactiveTintColor: '#c0c0c0',
            showLabel: false,
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
            title: 'Trang chủ',
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
            title: 'Cài đặt',
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
    Account: {
        screen: Profile,
        navigationOptions: () => ({
            title: 'Tôi',
            drawerIcon: ({ tintColor }) => {
                return (
                    <Ionicons
                        name='ios-person'
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