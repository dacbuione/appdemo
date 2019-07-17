import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import { View, TouchableOpacity } from 'react-native';



export default class HeaderButtonNavigation extends Component {
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <TouchableOpacity onPress={() => this.toggleDrawer()}>
                    <Ionicons
                        name='md-menu'
                        size={35}
                        color='black'
                    />
                </TouchableOpacity>
            </View>
        );
    }
}