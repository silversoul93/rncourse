import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import configureStore from './src/store/configureStore';

const store = configureStore();

// like a simplle constant it will not work
const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

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

AppRegistry.registerComponent(appName, () => RNRedux);
