import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlacesList from './src/components/PlacesList/PlacesList';
import placeImage from './src/assets/blood.jpg';

export default class App extends Component {

  state = {
    places: []
  };

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.onPlaceAddedHandler}></PlaceInput>

        <View style={styles.listContainer}>
          <PlacesList places={this.state.places} onItemDeleted={this.onItemDeletedHandler}></PlacesList>
        </View>

      </View>
    );
  }

  onPlaceAddedHandler = (place) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: place,
          image: placeImage
        })
      };
    });
  }

  onItemDeletedHandler = key => {
    this.setState(prevState => {
      return {
        // filter returns the array with all elements that matches the condition
        places: prevState.places.filter((place) => place.key !== key)
      };
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  listContainer: {
    width: '100%'
  }
});
