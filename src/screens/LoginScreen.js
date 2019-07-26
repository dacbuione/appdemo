import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Picker,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    ImageBackground,
    AsyncStorage,
    Keyboard
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window');
const bgImage = require('../assets/images/bg.jpg');
const logo = require('../assets/images/IRTECH.png');

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            errorMessage: null
        };
    };
   

    _login = () => {

        let base64 = require('base-64');
        let email = this.state.email;
        let password = this.state.password;

        this.setState({ errorMessage: '', loadding: true })

        let formData = new FormData();
        formData.append('_operation', 'Ping');

        if (email.length == 0 || password.length == 0) {
            this.setState({ errorMessage: 'Email và mật khẩu không được để trống!', loadding: false });
        }
        else {
            fetch('http://113.176.195.221:8081/ircrm/modules/CustomerPortal/api.php', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + base64.encode(email + ":" + password),
                },
                body: formData
            })
                .then((response) => response.json())
                .then((resData) => {
                    if (resData.success === true) {
                        this.setState({ errorMessage: '', loadding: false });
                        this.props.navigation.navigate('mainStack')
                        const{email,password} = this.state;
                    
                        //save data with asnycStorage
                    
                        let myArray = {
                            email: email,
                            password: password,
                        }
                        AsyncStorage.setItem('myArray',
                        
                        JSON.stringify(myArray));
                    
                        Keyboard.dismiss();
                        console.log(email + ' ' + password);
                    }
                    else {
                        this.setState({ errorMessage: 'Nhập sai email hoặc mật khẩu!', loadding: false });
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
        }
    }

    render() {
        return (
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
                                    placeholder='Email'
                                    keyboardType='email-address'
                                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                    underlineColorAndroid='transparent'

                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
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
                                    placeholder='Mật khẩu'
                                    secureTextEntry={true}
                                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                    underlineColorAndroid='transparent'

                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
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
                            <Text style={{ color: 'red', fontSize: 16 }}>{this.state.errorMessage}</Text>
                            <View>
                                <TouchableOpacity
                                    style={styles.buttonLogin}
                                    onPress={() => { this._login() }}
                                >
                                    <Text style={styles.textLogin}> Đăng nhập </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.viewForgetPass}>
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ForgetPass') }}
                                >
                                    <Text style={styles.textForgetPass}>Quên mật khẩu?</Text>
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
        marginBottom: 70
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
