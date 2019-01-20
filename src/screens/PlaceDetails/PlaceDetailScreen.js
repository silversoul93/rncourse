import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetailScreen = props => {
  return (
    <View style={styles.modalContainer}>
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeName} key={props.selectedPlace.key}>
          {props.selectedPlace.name}
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={props.onItemDeleted}>
          <View style={styles.deleteButton}>
            <Icon size={30} name='ios-trash' color='red'/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  }
});

export default placeDetailScreen;
