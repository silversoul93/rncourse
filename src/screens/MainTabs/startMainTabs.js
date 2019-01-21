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
              stack: {
                children: [
                  {
                    component: {
                      name: 'awesome-places.FindPlaceScreen',
                      options: {
                        topBar: {
                          title: {
                            text: 'Find Place'
                          }
                        }
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    title: 'Find Place',
                    text: 'Find Place',
                    icon: sources[0],
                    iconColor: '#9fa3a8'
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'awesome-places.SharePlaceScreen',
                      options: {
                        topBar: {
                          title: {
                            text: 'Share Place'
                          }
                        }
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    title: 'Share Place',
                    text: 'Share Place',
                    icon: sources[1],
                    iconColor: '#9fa3a8'
                  }
                }
              }
            },
          ]
        }
      }
    })

  });

};

export default startMainTabs;
