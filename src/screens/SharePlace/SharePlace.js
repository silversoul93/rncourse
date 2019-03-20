import React, {Component} from 'react';
import {View, Keyboard} from 'react-native';
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import {connect} from 'react-redux';
import {addPlace} from '../../store/actions/index';
import {Navigation} from "react-native-navigation";

class SharePlaceScreen extends Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this, this.props.componentId);
    }

    navigationButtonPressed({ buttonId }) {
        // will be called when "buttonOne" is clicked
        Navigation.mergeOptions('MainSideMenu', {
           sideMenu: {
               left: {
                   visible: true
               }
           }
        });
    }

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
        Keyboard.dismiss();
    };

    render() {
        return (
          <View>
              <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
          </View>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
