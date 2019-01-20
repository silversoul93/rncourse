import {Navigation} from 'react-native-navigation';
import AuthScreen from "./src/screens/Auth/Auth";
import FindPlace from "./src/screens/FindPlace/FindPlace";
import SharePlace from "./src/screens/SharePlace/SharePlace";


Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen);
Navigation.registerComponent('awesome-places.FindPlaceScreen', () => FindPlace);
Navigation.registerComponent('awesome-places.SharePlaceScreen', () => SharePlace);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'awesome-places.AuthScreen'
      }
    }
  });
});
