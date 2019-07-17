
import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, Animated, Dimensions } from 'react-native';

const portalLogo = require('../assets/images/portal.png');
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
                <Animated.Image source={portalLogo}
                    style={{ ...styles.logo, opacity: this.state.logoOpacity }}>
                </Animated.Image>
                <Animated.Text style={{ ...styles.title, marginTop: this.state.titleMarginTop }}>
                    CUSTOMER PORTAL
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
        width: 200,
        height: 200,
    },
    title: {
        textAlign: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#8B1A1A'
    }
});