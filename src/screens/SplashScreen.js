
import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, Animated, Dimensions } from 'react-native';

const logo = require('../assets/images/IRTECH.png');
var { height, width } = Dimensions.get('window')

export default class SplashScreen extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        logoOpacity: new Animated.Value(0),
        titleMarginTop: new Animated.Value(height / 2)
    }

    async componentDidMount() {
        //add aminations here
        Animated.sequence([
            //animations by sequence
            Animated.timing(this.state.logoOpacity, {
                toValue: 1,
                duration: 1500,
            }),
            //animations text
            Animated.timing(this.state.titleMarginTop, {
                toValue: 10,
                duration: 1000, //1000 miliseconds = 1 second
            })
        ]).start(() => {
            //end of animations
            //navigate to login
            this.props.navigation.navigate("Login")
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Image source={logo}
                    style={{ ...styles.logo, opacity: this.state.logoOpacity }}>
                </Animated.Image>
                <Animated.Text style={{ ...styles.title, marginTop: this.state.titleMarginTop }}>
                    IRTECH
                </Animated.Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 301,
        height: 178,
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#6AC8C9'
    }
});