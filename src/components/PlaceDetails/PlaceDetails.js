import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetails = props => {
  let modalContent = null;
  let icon = Icon.getImageSource('md-map', 30, 'red');

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName} key={props.selectedPlace.key}>
          {props.selectedPlace.name}
        </Text>
      </View>
    );
  }

  // We need to specify '!== null', otherwise the property will not work
  // onRequestClose is required, but just for TV and android; without it, the 'back' button of the device will not work'
  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType='slide'
      onRequestClose={props.onModalClosed} >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon size={30} name='ios-trash' color='red' />
            </View>
          </TouchableOpacity>
          <Button title='Close' onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
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

export default placeDetails;