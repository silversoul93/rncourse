import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {

  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30)
  ]).then(sources => {

    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'MainTabs',
          children: [
            {
              component: {
                name: 'awesome-places.FindPlaceScreen',
                options: {
                  bottomTab: {
                    text: 'Find Place',
                    icon: sources[0],
                    iconColor: 'blue'
                  }
                }
              }
            },
            {
              component: {
                name: 'awesome-places.SharePlaceScreen',
                options: {
                  bottomTab: {
                    text: 'Share Place',
                    icon: sources[1],
                    iconColor: 'blue'
                  }
                }
              }
            }

          ]
        }
      }
    })

  });

};

export default startMainTabs;
