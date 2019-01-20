import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import PlacesList from "../../components/PlacesList/PlacesList";

import {Navigation} from 'react-native-navigation';

class FindPlaceScreen extends Component {

  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => place.key === key);
    // this.props.navigator.push({
    //   screen: 'awesome-places.PlaceDetailScreen',
    //   title: selPlace.name,
    //   passProps: {
    //     selectedPlace: selPlace
    //   }
    // });
    Navigation.push(this.props.componentId, {
      component: {
        name: 'awesome-places.PlaceDetailScreen',
        passProps: {
          selectedPlace: selPlace
        },
        options: {
          topBar: {
            title: {
              text: selPlace.name
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <View>
        <PlacesList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
      </View>
    );
  }

}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
};

export default connect(mapStateToProps, null)(FindPlaceScreen);
