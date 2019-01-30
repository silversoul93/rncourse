import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {Navigation} from "react-native-navigation";
import startMainTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Please Log In</Text>
        <Button title='Switch to login' onPress={() => alert('TODO')}/>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Your email address' style={styles.input}/>
          <TextInput placeholder='Password' style={styles.input}/>
          <TextInput placeholder='Confirm Password' style={styles.input}/>
        </View>
        <Button title='Submit' onPress={this.loginHandler}/>
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
  input: {
    width: '100%'
  }
});

export default AuthScreen;
