import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {deletePlace} from "../../store/actions";

class PlaceDetails extends Component {

  placeDeleteHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    Navigation.pop(this.props.componentId);
  };

  render() {
    return (
      <View style={styles.modalContainer}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage}/>
          <Text style={styles.placeName} key={this.props.selectedPlace.key}>
            {this.props.selectedPlace.name}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeleteHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name='ios-trash' color='red'/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => { dispatch(deletePlace(key)) }
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetails);
