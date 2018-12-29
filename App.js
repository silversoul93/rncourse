import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlacesList from './src/components/PlacesList/PlacesList';
import PlaceDetails from './src/components/PlaceDetails/PlaceDetails';

export default class App extends Component {

  state = {
    places: [],
    selectedPlace: null
  };

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetails
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClose={this.modalClosedHandler}>
        </PlaceDetails>
        <PlaceInput onPlaceAdded={this.onPlaceAddedHandler}></PlaceInput>

        <View style={styles.listContainer}>
          <PlacesList
            places={this.state.places}
            onItemSelected={this.placeSelectedHandler}>
          </PlacesList>
        </View>

      </View>
    );
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  onPlaceAddedHandler = (place) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: place,
          image: {
            uri: 'https://i.pinimg.com/originals/18/80/bd/1880bdda03b8579b3cfeebf5876ab27c.jpg'
          }
        })
      };
    });
  }

  placeDeletedHandler = key => {
    if (this.state.selectedPlace) {
      this.setState(prevState => {
        return {
          selectedPlace: null,
          places: prevState.places.filter(place => place.key !== prevState.selectedPlace.key)
        };
      });
    } else {
      this.setState(prevState => {
        return {
          // filter returns the array with all elements that matches the condition
          places: prevState.places.filter((place) => place.key !== key)
        };
      });
    }
  }

  placeSelectedHandler = key => {
    console.log('state: ', this.state.selectedPlace);
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => place.key === key)
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
