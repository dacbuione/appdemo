import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    ImageBackground,
} from 'react-native';


const { width: WIDTH } = Dimensions.get('window');
const bgImage = require('../assets/images/bg.jpg');
const logo = require('../assets/images/IRTECH.png');


export default class ChangeInfoScreen extends React.Component{
    static navigationOptions = {
        title: 'Cập nhật thông tin cá nhân',
        headerStyle: {
            backgroundColor: '#4267b2',
        }
    };
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Admin',
            email:'dacbuione@gmail.com',
            phone:'0961510542'
        };
      }

    render(){
        return(
            <ScrollView horizontal={false}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                        <View style={styles.container}>
                            <View style={styles.logoContainer}>
                                <Image source={logo} style={styles.logo} />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    value={this.state.name}
                                    onChangeText={(text) => this.setState({name})}
                                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                    underlineColorAndroid='transparent'
                                />
                                <Icon name='user-circle-o'
                                    size={28}
                                    color='rgba(255, 255, 255, 0.7)'
                                    style={styles.inputIcon}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    onChangeText={(text) => this.setState({phone})}
                                    style={styles.inputText}
                                    value={this.state.phone}
                                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                    underlineColorAndroid='transparent'
                                />
                                <Icon name='phone-square'
                                    size={28}
                                    color='rgba(255, 255, 255, 0.7)'
                                    style={styles.inputIcon}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    value={this.state.email}
                                    style={styles.inputText}
                                    onChangeText={(text) => this.setState({email})}
                                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                    underlineColorAndroid='transparent'
                                />
                                <Icon name='google-plus-circle'
                                    size={28}
                                    color='rgba(255, 255, 255, 0.7)'
                                    style={styles.inputIcon}
                                />
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.btnChangepass}
                                    onPress={() => alert('Cập nhật thành công')}>
                                    <Text style={styles.textLogin}> Cập nhật </Text>
                                </TouchableOpacity>
                            </View>    
                        </View>
                    </ImageBackground>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundContainer: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        marginTop:-30,
        alignItems: 'center',
        marginBottom: 50
    },
    logo: {
        width: 150,
        height: 90,
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 70
    },

    inputContainer: {
        marginTop: 5
    },
    inputText: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 5,
        fontSize: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'rgba(255, 255, 255, 0.9)',
        paddingLeft: 55
    },
    inputIcon: {
        position: 'absolute',
        top: 7,
        left: 20,
        marginRight:20
    },
    btnChangepass: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009ACD',
        height: 45,
        width: WIDTH - 55,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 50,
    },

    textLogin: {
        color: '#fff',
        marginBottom: 4,
        marginRight: 20,
        fontSize: 18
    },
});

