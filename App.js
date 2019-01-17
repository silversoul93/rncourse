import {Navigation} from 'react-native-navigation';
import AuthScreen from "./src/screens/Auth/Auth";


Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'awesome-places.AuthScreen'
      }
    }
  });
});
