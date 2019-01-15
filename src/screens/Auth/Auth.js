import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import startTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {

    loginHandler() {
        startTabs();
    }

    render() {
        return(
            <View style={ { alignItems: 'center' } }>
                <Text>Login screen</Text>
                <Button title='Login' onPress={this.loginHandler}></Button>
                <Icon size={30} name='ios-share' color='blue'/>
            </View>
        );
    }

}

export default AuthScreen;