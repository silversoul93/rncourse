import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import PlacesList from "../../components/PlacesList/PlacesList";

import {Navigation} from 'react-native-navigation';

class FindPlaceScreen extends Component {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this, this.props.componentId);
  }

  navigationButtonPressed({buttonId}) {
    // will be called when "buttonOne" is clicked
    Navigation.mergeOptions('MainSideMenu', {
      sideMenu: {
        left: {
          visible: true
        }
      }
    });
  }

  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => place.key === key);
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
