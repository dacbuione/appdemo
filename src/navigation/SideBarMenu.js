import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { DrawerItems } from 'react-navigation';

const headerDrawer = require('../assets/images/profile.jpg');

export default class SideBarMenu extends Component {

    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', }}>
                    <ImageBackground source={headerDrawer} style={{ width: '100%', height: '100%' }}>
                        <TouchableOpacity >
                            <View>
                                <Image
                                    source={{ uri: 'https://ss-images.catscdn.vn/2019/04/22/5029254/3561716420480213454575853861059020806684672n-15510057259571546306615.jpg' }}
                                    style={styles.sideMenuProfileIcon}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={{ margin: 20, marginTop: 0, marginBottom: 5 }}>
                                <Text style={{ color: 'white' }}>Admin</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                <View>
                    <DrawerItems {...this.props} />
                </View>

                <TouchableOpacity
                    style={styles.logout}
                    onPress={() => this.onLogoutPress()}>
                    <Text style={styles.logoutText}>Đăng xuất</Text>
                    <Ionicons
                        name='ios-log-out'
                        size={28}
                        color='rgba(0, 0, 0, 0.5)'
                        style={styles.logoutIcon}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    avatar: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'red'
    },
    avatarText: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5
    },
    logout: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    logoutIcon: {
        position: 'absolute',
        top: 10,
        left: 18
    },
    logoutText: {
        marginLeft: '26%',
        fontWeight: 'bold'
    },
    sideMenuContainer: {
        width: '100%',
        height: '100%',
    },
    sideMenuProfileIcon: {
        width: 90,
        height: 90,
        borderRadius: 45,
        margin: 10,
        marginTop: 30
    },
});
