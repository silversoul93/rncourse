import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

class SideDrawer extends Component {
  render() {
    return (
      <View style={ {backgroundColor: 'white', width: Dimensions.get('window').width * 0.5 } }>
        <Text>SideDrawer Screen</Text>
      </View>
    );
  }
}

export default SideDrawer;
