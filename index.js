import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';

import {Navigation} from 'react-native-navigation';
import AuthScreen from "./src/screens/Auth/Auth";

const store = configureStore();

Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen);

// like a simple constant it will not work
// const RNRedux = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// it's ok like this too
/* class RNRedux extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
} */

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'awesome-places.AuthScreen'
            }
        }
    });
});