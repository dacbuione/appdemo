import React, { Component } from 'react';

import {Card, CardItem, Text } from 'native-base';

import { View, TouchableOpacity , StyleSheet, ImageBackground, Image, ScrollView} from 'react-native';
import {} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const headerDrawer = require('../assets/images/profile.jpg');


export default class SettingAccount extends Component {
    
    static navigationOptions = {
        title:"Cài đặt",
        headerStyle: {
            backgroundColor: '#4267b2',
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Card style={{marginTop:20,marginBottom:20}}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('changeInfo')}}>
                        <CardItem style={styles.carditem}>
                            <Icon name='address-card'color='red' size={30} style ={{marginRight:20}} />
                                <Text>Cập nhật thông tin cá nhân</Text>
                        </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('changePass')}}>
                        <CardItem style={styles.carditem}>      
                            <Icon name='lock'color='#00CC00' size={30} style ={{marginRight:20}} />
                            <Text>   Đổi mật khẩu</Text>
                        </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <CardItem style={styles.carditem}>
                            <Icon name='cogs'color='#0099FF' size={30} style ={{marginRight:20}} />
                            <Text>Phiên bản</Text>
                        </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{marginBottom:30}}>
                        <TouchableOpacity>
                        <CardItem style={styles.carditem}>
                            <Icon name='facebook-square'color='#4267b2' size={30} style ={{marginRight:20}} />
                            <Text>Facebook</Text>
                        </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <CardItem style={styles.carditem}>
                            <Icon name='twitter-square'color='#1DA1F2' size={30} style ={{marginRight:20}} />
                            <Text>Twitter</Text>
                        </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <CardItem style={styles.carditem}>
                            <Icon name='google-plus-circle'color='red' size={30} style ={{marginRight:20}} />
                            <Text>Google</Text>
                        </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card>
                        <TouchableOpacity>
                        <CardItem style={styles.carditem}>
                            <Icon name='expeditedssl'color='#008080' size={30} style ={{marginRight:20}} />
                            <Text>Quyền riêng tư & Điều khoản</Text>
                        </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('loginStack') }}>
                        <CardItem style={styles.carditem}>
                            <Icon name='sign-out'color='black' size={30} style ={{marginRight:20}} />
                            <Text>Đăng xuất</Text>
                        </CardItem>
                        </TouchableOpacity>
                    </Card>
                </ScrollView>            
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    top: {
        flex:1,
        width: '100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    bottom: {
        flex:1.5,
        backgroundColor:'#EEEEEE'
    },
    sideMenuProfile: {
        width: 146,
        height: 146,
        borderRadius: 73,
        justifyContent:'center',
        alignItems:'center'
    },
    borderProfile: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth:2,
        borderColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    carditem: {
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        flexDirection:'row'
    },
    textSize: {
        flex:1,
        fontSize:13,
        color:'grey',
        textAlign:'right'
    },
  });
