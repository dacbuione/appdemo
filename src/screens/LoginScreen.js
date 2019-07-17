import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Picker,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    ImageBackground
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window');
const bgImage = require('../assets/images/bg.jpg');

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    state = {
        checked: false,
        language: false,
    };

    render() {
        return (
            <ScrollView horizontal={false}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                        <View style={styles.container}>

                            <View style={styles.logoContainer}>
                                <Text style={styles.logoText}>Customer Portal</Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder='Email'
                                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                    underlineColorAndroid='transparent'
                                />
                                <Ionicons
                                    name='md-mail'
                                    size={28}
                                    color='rgba(255, 255, 255, 0.7)'
                                    style={styles.inputIcon}
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                    underlineColorAndroid='transparent'
                                />
                                <Ionicons name='md-lock'
                                    size={28}
                                    color='rgba(255, 255, 255, 0.7)'
                                    style={styles.inputIcon}
                                />
                            </View>

                            {/* <View style={styles.pickerLanguage}>
                                <Picker style={styles.pickerItem}
                                    mode="dropdown"
                                    selectedValue={this.state.language}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
                                >
                                    <Picker.Item label="US English" />
                                    <Picker.Item label="DE Deutsch" />
                                    <Picker.Item label="ES Spanish" />
                                </Picker>
                            </View> */}

                            <View>
                                <TouchableOpacity
                                    style={styles.buttonLogin}
                                    onPress={()=>{this.props.navigation.navigate('Main')}}
                                >
                                    <Text style={styles.textLogin}> Login </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.viewForgetPass}>
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ForgetPass') }}
                                >
                                    <Text style={styles.textForgetPass}>Forget Pasword?</Text>
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
        height: Dimensions.get('window').height,
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
        alignItems: 'center',
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
        left: 20
    },
    pickerLanguage: {
        width: WIDTH - 55,
        height: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 10,

    },
    pickerItem: {
        color: 'rgba(255, 255, 255, 0.9)',
        marginLeft: 45
    },
    buttonLogin: {
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

    viewForgetPass: {
        width: WIDTH - 55,
    },
    textForgetPass: {
        textAlign: 'right',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1874CD'
    }

});