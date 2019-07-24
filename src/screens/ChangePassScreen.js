import { Ionicons } from '@expo/vector-icons';

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
const logo = require('../assets/images/logoFast.png');


export default class ChangePassScreen extends React.Component {

    static navigationOptions = {
        title: 'Đổi mật khẩu',
        headerStyle: {
            backgroundColor: '#4267b2',
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            oldPass: '',
            newPass: '',
            newPassConfirm: '',
            loading: false,
            errorMessage: null
        }
    }

    _changePass = () => {
        let oldPass = this.state.oldPass;
        let newPass = this.state.newPass;
        let newPassConfirm = this.state.newPassConfirm;

        this.setState({ errorMessage: '', loadding: true })

        let formData = new FormData();
        formData.append('_operation', 'ChangePassword');
        formData.append('password', '');
        formData.append('newPassword', );

        if (oldPass.length == 0 || newPass.length == 0 || newPassConfirm.length == 0) {
            this.setState({ errorMessage: 'Bạn phải điền đầy đủ các trường!', loadding: false })
        }
        else{
            if (newPass !== newPassConfirm) {
                this.setState({ errorMessage: 'Mật khẩu không khớp!', loadding: false })
            }
            else {
                fetch('http://113.176.195.221:8081/ircrm/modules/CustomerPortal/api.php', {
                    method:'POST',
                    headers:'',
                    body: formData
                })
                .then((response) => response.json())
                .then((resData) => {
                    console.warn(resData)
                })
            }
        }

    }

    render() {
        return (
            <ScrollView horizontal={false}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                        <View style={styles.container}>

                                <Image source={logo} style={styles.logo} />

                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder='Mật khẩu cũ'
                                    secureTextEntry={true}
                                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                    underlineColorAndroid='transparent'

                                    onChangeText={(oldPass) => this.setState({ oldPass })}
                                    value={this.state.oldPass}
                                />
                                <Ionicons name='md-lock'
                                    size={28}
                                    color='rgba(255, 255, 255, 0.7)'
                                    style={styles.inputIcon}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder='Mật khẩu mới'
                                    secureTextEntry={true}
                                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                    underlineColorAndroid='transparent'

                                    onChangeText={(newPass) => this.setState({ newPass })}
                                    value={this.state.newPass}
                                />
                                <Ionicons name='md-lock'
                                    size={28}
                                    color='rgba(255, 255, 255, 0.7)'
                                    style={styles.inputIcon}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder='Nhập lại mật khẩu mới'
                                    secureTextEntry={true}
                                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                    underlineColorAndroid='transparent'

                                    onChangeText={(newPassConfirm) => this.setState({ newPassConfirm })}
                                    value={this.state.newPassConfirm}
                                />
                                <Ionicons name='md-lock'
                                    size={28}
                                    color='rgba(255, 255, 255, 0.7)'
                                    style={styles.inputIcon}
                                />
                            </View>
                            <Text style={{ color: 'red', fontSize: 16 }}>{this.state.errorMessage}</Text>
                            <View>
                                <TouchableOpacity
                                    style={styles.btnChangepass}
                                    onPress={() => this._changePass()}
                                >
                                    <Text style={styles.textLogin}> Đổi mật khẩu </Text>
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
    logo: {
        width: WIDTH - 50,
        height: 95,
        marginBottom: 80,
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

