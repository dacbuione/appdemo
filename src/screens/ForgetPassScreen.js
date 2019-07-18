
import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

const { height, width: WIDTH } = Dimensions.get('window');

export default class ForgetPassScreen extends Component {

  render() {
    return (
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={styles.container}>

            <View style={styles.title}>
              <Text style={{ fontSize: 25 }}>Bạn đã quên mật khẩu?</Text>
              <Text style={{ fontSize: 16, marginBottom: 30 }}>Mời bạn nhập email để tìm tài khoản</Text>
            </View>

            <View>
              <TextInput
                style={styles.inputText}
                placeholder='user@gmail.com'
                keyboardType='email-address'
                placeholderTextColor={'rgba(0, 0, 0, 0.7)'}
                underlineColorAndroid='transparent'
              />
              <Ionicons
                name='md-mail'
                size={28}
                color='rgba(0, 0, 0, 0.7)'
                style={styles.inputIcon}
              />
            </View>

            <TouchableOpacity style={styles.buttonSubmit}>
              <View style={styles.iconSubmit}>
                <Ionicons
                  name='ios-arrow-forward'
                  size={30}
                  color='rgba(255, 255, 255, 0.7)'
                />
              </View>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    marginTop: 20
  },
  title: {
    width: WIDTH - 55,
    alignItems: 'flex-start'
  },
  inputText: {
    width: WIDTH - 55,
    height: 45,
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingLeft: 40,
    borderWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.7)',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white'
  },
  inputIcon: {
    position: 'absolute',
    top: 7,
  },

  buttonSubmit: {
    width: WIDTH - 55,
    height: 50,
    alignItems: 'flex-end',
    marginTop: '5%',
  },
  iconSubmit: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30,
  },
});