import React from 'react';
import { Modal, View, Image, Text, Button } from 'react-native';

const placeDetails = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <Modal>
        <View>
          <Image source={props.selectedPlace ? props.selectedPlace.placeImage : { uri: '' }} />
          <Text>
            {props.selectedPlace ? props.selectedPlace.placeName : ''}
          </Text>
          <Button title='' />
          <Button title='' />
        </View>
      </Modal>
    );
  }
  return modalContent;
};

export default placeDetails;