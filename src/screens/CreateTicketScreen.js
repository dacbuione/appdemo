import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Picker,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';


const bgImage = require('../assets/images/bg.jpg');
const { width: WIDTH } = Dimensions.get('window');

export default class CreateTicketScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            language: ''
        }
    };

    render() {
        return (
            <ScrollView horizontal={false}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <ImageBackground source={bgImage} style={styles.backgroundContainer}>

                        <View>
                            <Text style={styles.textTitle}>Thêm phiếu mới</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder='Tiêu đề'
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'

                            />
                            <Ionicons name='ios-create'
                                size={28}
                                color='rgba(255, 255, 255, 0.7)'
                                style={styles.inputIcon}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Picker style={styles.input}
                                selectedValue={this.state.productName}
                                onValueChange={(itemValue, itemIndex) => this.setState({ productName: itemValue })}
                            >
                                <Picker.Item label="CRM" value="crm" />
                                <Picker.Item label="ROBOTIC" value="robotic" />
                            </Picker>
                        </View>

                        <View style={styles.inputContainer}>
                            <Picker style={styles.input}
                                selectedValue={this.state.serviceContracts}
                                onValueChange={(itemValue, itemIndex) => this.setState({ serviceContracts: itemValue })}
                            >
                                <Picker.Item label="A" value="a" />
                                <Picker.Item label="B" value="b" />
                            </Picker>
                        </View>

                        <View style={styles.inputContainer}>
                            <Picker style={styles.input}
                                selectedValue={this.state.ticketPriority}
                                onValueChange={(itemValue, itemIndex) => this.setState({ ticketPriority: itemValue })}
                            >
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                            </Picker>
                        </View>

                        <View style={styles.inputContainer}>
                            <Picker style={styles.input}
                                selectedValue={this.state.ticketCategory}
                                onValueChange={(itemValue, itemIndex) => this.setState({ ticketCategory: itemValue })}
                            >
                                <Picker.Item label="All" value="all" />
                                <Picker.Item label="None" value="none" />
                            </Picker>
                        </View>

                        <View style={styles.inputContainer}>
                            <Picker style={styles.input}
                                selectedValue={this.state.ticketSeverity}
                                onValueChange={(itemValue, itemIndex) => this.setState({ ticketSeverity: itemValue })}
                            >
                                <Picker.Item label="Yes" value="yes" />
                                <Picker.Item label="No" value="no" />
                            </Picker>
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder='Mô tả'
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                            />
                            <Ionicons name='ios-hand'
                                size={28}
                                color='rgba(255, 255, 255, 0.7)'
                                style={styles.inputIcon}
                            />
                        </View>

                        <View style={styles.textButton}>
                            <TouchableOpacity
                                style={styles.text_ok}
                            >
                                <Text style={style = styles.text}>Gửi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.text_cancel}
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Text style={styles.text}>Thoát</Text>
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>
                </KeyboardAvoidingView>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: '5%',
    },
    inputContainer: {
        marginTop: 10
    },
    input: {
        width: WIDTH - 55,
        height: 50,
        fontSize: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'rgba(255, 255, 255, 0.9)',
        paddingLeft: 55,
    },
    
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 20
    },
    textButton: {
        width: WIDTH - 55,
        height: 50,
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
    },
    text_ok: {
        marginRight: '5%',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 154, 205, 0.5)',
    },
    text_cancel: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 139, 69, 0.57)',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});