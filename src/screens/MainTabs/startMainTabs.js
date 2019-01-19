import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {

    Promise.all([
        Icon.getImageSource('md-map', 30),
        Icon.getImageSource('ios-share', 30)
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
                                    topBar: {
                                        visible: true,
                                        title: {
                                            text: 'Find Place Screen'
                                        },
                                    },
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
                                    topBar: {
                                        visible: true,
                                        title: {
                                            text: 'Share Place Screen'
                                        },
                                    },
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