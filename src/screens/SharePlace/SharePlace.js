import React, { Component } from "react";
import { View, Text, TextInput, Button, Keyboard, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { addPlace } from "../../store/actions/index";
import { Navigation } from "react-native-navigation";

import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";

class SharePlaceScreen extends Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this, this.props.componentId);
    }

    navigationButtonPressed({ buttonId }) {
        // will be called when "buttonOne" is clicked
        Navigation.mergeOptions("MainSideMenu", {
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
            <ScrollView>
                <View style={styles.container}>
                    <Text>Share a place with us</Text>
                    <View style={styles.placeholder}>
                        <Text>Image preview!</Text>
                    </View>

                    <View>
                        <Button title="Pick image" onPress={() => alert("onPress")} />
                    </View>

                    <View style={styles.placeholder}>
                        <Text>Map</Text>
                    </View>
                    
                    <Button title="Locate me" onPress={() => alert("onPress")} />
                    <DefaultInput style={{ width: "80%" }} placeholder="place name" />
                    <Button title="Share the place" onPress={() => alert("onPress")} />
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 160
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
