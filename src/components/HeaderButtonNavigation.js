import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import { View, TouchableOpacity } from 'react-native';

export default class HeaderButtonNavigation extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
                <TouchableOpacity onPress={() => this.toggleDrawer()}  style={{ flexDirection: 'row', marginLeft: 5, paddingRight:50, }}>
                    <Ionicons
                        name='ios-menu'
                        size={30}
                        color='black'
                    />
                </TouchableOpacity>
        );
    }
}