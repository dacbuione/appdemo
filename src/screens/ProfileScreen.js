import React, { Component } from 'react';

import {Card, CardItem, Text } from 'native-base';

import { View, TouchableOpacity , StyleSheet, ImageBackground, Image} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

const headerDrawer = require('../assets/images/profile.jpg');

// const TOKEN = 'TOKEN';
export default class ProfileScreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>

                <ImageBackground source={headerDrawer} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <View style={styles.borderProfile}>
                            <Image
                            // source={require('../images/ple.jpg')}
                            source={{uri: 'https://ss-images.catscdn.vn/2019/04/22/5029254/3561716420480213454575853861059020806684672n-15510057259571546306615.jpg'}}
                            style={styles.sideMenuProfile}
                            />
                        </View>
                        <Text style={{color:'#fff',marginTop:12}}>Admin</Text>
                </ImageBackground>

                <View style={styles.bottom}>
                    <ScrollView>
                        <Card style={{marginTop:20,marginBottom:15}}>
                            <TouchableOpacity>
                            <CardItem style={styles.carditem}>
                                <Icon name='pinterest-square'color='red' size={30} style ={{marginRight:20}} />
                                    <Text style={{flex:1}}>Tên người dùng</Text>
                                    <Text style={styles.textSize}>Admin</Text>
                            </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <CardItem style={styles.carditem}>
                                <Icon name='phone-square'color='#00CC00' size={30} style ={{marginRight:20}} />
                                <Text style={{flex:1}}>Điện Thoại</Text>
                                <Text style={styles.textSize}>0961510542</Text>
                            </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <CardItem style={styles.carditem}>
                                <Icon name='envelope-o'color='#0099FF' size={30} style ={{marginRight:20}} />
                                <Text style={{flex:1}}>Email </Text>
                                <Text style={styles.textSize}>dacbuione@gmail.com</Text>
                            </CardItem>
                            </TouchableOpacity>
                        </Card>
                        <Card style={{marginBottom:15}}>
                            <TouchableOpacity>
                            <CardItem style={styles.carditem}>
                                <Icon name='eercast'color='#00FA9A' size={30} style ={{marginRight:20}} />
                                <Text>Thông báo</Text>
                            </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <CardItem style={styles.carditem}>
                                <Icon name='camera-retro'color='red' size={30} style ={{marginRight:20}} />
                                <Text>Ảnh & Phương tiện</Text>
                            </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <CardItem style={styles.carditem}>
                                <Icon name='info-circle'color='#EE9A00' size={30} style ={{marginRight:20}} />
                                <Text>Báo cáo sự cố</Text>
                            </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <CardItem style={styles.carditem}>
                                <Icon name='question-circle'color='#1874CD' size={30} style ={{marginRight:20}} />
                                <Text>Trợ giúp</Text>
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
                            <TouchableOpacity>
                            <CardItem style={styles.carditem}>
                                <Icon name='gear'color='#008080' size={30} style ={{marginRight:20}} />
                                <Text>Cài đặt tài khoản</Text>
                            </CardItem>
                            </TouchableOpacity>
                        </Card>
                    </ScrollView>
                </View>
            
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
