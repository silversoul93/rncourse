import App from './App';
import { name as appName } from './app.json';

// NB. We don't need this dedicated android/ios index file, I added it just for android/ios customizations

AppRegistry.registerComponent(appName, () => App);