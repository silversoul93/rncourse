import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { Navigation } from 'react-native-navigation';
import startMainTabs from '../MainTabs/startMainTabs';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

import backgroundImage from '../../assets/bloodborne.jpg';

class AuthScreen extends Component {
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} imageStyle={{ opacity: 0.65 }}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please Log In</HeadingText>
          </MainText>
          <ButtonWithBackground onPress={() => alert('TODO')} color='#29aaf4'>Switch to login</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder='Your email address' style={styles.input} />
            <DefaultInput placeholder='Password' style={styles.input} />
            <DefaultInput placeholder='Confirm Password' style={styles.input} />
          </View>
          <ButtonWithBackground onPress={this.loginHandler} color="#29aaf4">Submit</ButtonWithBackground>
        </View>
      </ImageBackground>
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
  },
  backgroundImage: {
    flex: 1,
    width: '100%'

  }
});

export default AuthScreen;
