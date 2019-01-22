import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {

  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30),
    Icon.getImageSource('ios-menu', 30)
  ]).then(sources => {

    Navigation.setRoot({
      root: {
        sideMenu: {
          id: 'MainSideMenu',
          left: {
            component: {
              name: 'awesome-places.SideDrawerScreen'
            }
          },
          center: {
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
                              leftButtons: [
                                {
                                  id: 'SideMenuButton',
                                  icon: sources[2]
                                }
                              ],
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
                              leftButtons: [
                                {
                                  id: 'SideMenuButton',
                                  icon: sources[2],
                                }
                              ],
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
          },
          right: {
            component: {
              id: 'RightSideMenu',
              name: 'awesome-places.SideDrawerScreen',
              options: {
                sideMenu: {
                  right: {
                    enabled: false,
                    visible: false
                  }
                }
              }
            }
          }
        }
      }
    });

  });

};

export default startMainTabs;
