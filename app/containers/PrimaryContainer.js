import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import MapContainer from './MapContainer';
import SearchContainer from './SearchContainer';
import colors from '../assets/colors'
import { Icon } from 'react-native-elements';


// Putting a tab navigator at the bottom of the Features page to toggle between viewing and creating features
// https://codeburst.io/react-native-navigation-stack-navigator-inside-tab-navigator-inside-drawer-navigator-b2f21836708d
// https://readybytes.in/blog/how-to-integrate-tabs-navigation-drawer-navigation-and-stack-navigation-together-in-react-navigation-v2


AppTabs = createBottomTabNavigator({
    Map: {
        screen: MapContainer,
        navigationOptions: {
            title: 'View on Map',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name='map-outline'
                    type='material-community'
                    color={tintColor}
                    size={17} />
            )
        }
    }, 
    Search: {
        screen: SearchContainer,
        navigationOptions: {
            title: 'Search Results',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name='search'
                    type='material-community'
                    color={tintColor}
                    size={17} />
            )
        }
    }
},{
    tabBarOptions: {
        activeTintColor: colors.primaryBlue,
        inactiveTintColor: colors.grey,
        style: {
            backgroundColor: colors.white,
            padding: 5,
        },
        indicatorStyle: {
            backgroundColor: colors.black,
        },

    }
});

export default createAppContainer( AppTabs);
