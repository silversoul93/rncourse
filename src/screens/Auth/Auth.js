import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from "react-native-navigation";
import startMainTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', margin: 5}}>
        <Text style={{marginBottom: 3}}>Auth Screen</Text>
        <Button title='Login' onPress={this.loginHandler}/>
      </View>
    );
  }

  loginHandler() {

    startMainTabs();

  }
}

export default AuthScreen;
