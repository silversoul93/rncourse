import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import startMainTabs from '../MainTabs/startMainTabs';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';

class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
        <Button title='Switch to login' onPress={() => alert('TODO')} />
        <View style={styles.inputContainer}>
          <DefaultInput placeholder='Your email address' style={styles.input} />
          <DefaultInput placeholder='Password' style={styles.input} />
          <DefaultInput placeholder='Confirm Password' style={styles.input} />
        </View>
        <Button title='Submit' onPress={this.loginHandler} />
      </View>
    );
  }

  loginHandler() {
    startMainTabs();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    borderWidth: 3,
    borderColor: 'red',
    width: '80%'
  },
  textHeading: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#aaa',
    borderRadius: 10
  }
});

export default AuthScreen;
