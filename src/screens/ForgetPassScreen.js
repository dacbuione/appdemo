
import React, { Component } from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';

export default class ForgetPassScreen extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 23 }}>Forget Password Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});