import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class AuthScreen extends Component {

    render() {
        return(
            <View style={ { alignItems: 'center' } }>
                <Text>Login screen</Text>
                <Button title='Login' onPress={() => alert('ciao')}></Button>
                <Icon size={30} name='md-map' color='blue'/>
            </View>
        );
    }

}

export default AuthScreen;