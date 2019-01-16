import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {

    Promise.all([
        Icon.getImageSource('md-map', 30, 'red'),
        Icon.getImageSource('ios-share', 30, 'red')
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'awesome-places.FindPlaceScreen',
                    title: 'Find Place',
                    label: 'Find Place',
                    icon: sources[0]
                },
                {
                    screen: 'awesome-places.SharePlaceScreen',
                    title: 'Share Place',
                    label: 'Share Place',
                    icon: sources[1]
                }

            ]
        });
    });


};

export default startTabs;