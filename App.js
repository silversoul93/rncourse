import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlace from './src/screens/FindPlace/FindPlace';
import SharePlace from './src/screens/SharePlace/SharePlace';

import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import PlaceDetailScreen from './src/screens/PlaceDetails/PlaceDetailScreen';

const store = configureStore();

Navigation.registerComponentWithRedux('awesome-places.AuthScreen', () => AuthScreen, Provider, store);
Navigation.registerComponentWithRedux('awesome-places.FindPlaceScreen', () => FindPlace, Provider, store);
Navigation.registerComponentWithRedux('awesome-places.SharePlaceScreen', () => SharePlace, Provider, store);
Navigation.registerComponent('awesome-places.PlaceDetailScreen', () => PlaceDetailScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'awesome-places.AuthScreen'
      }
    }
  });
});
