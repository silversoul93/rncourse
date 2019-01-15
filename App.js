import {Navigation} from 'react-native-navigation';
import AuthScreen from "./src/screens/Auth/Auth";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";

Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen);
Navigation.registerComponent('awesome-places.FindPlaceScreen', () => FindPlaceScreen);
Navigation.registerComponent('awesome-places.SharePlaceScreen', () => SharePlaceScreen);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'awesome-places.AuthScreen',
        title: 'Auth Screen'
    }
});