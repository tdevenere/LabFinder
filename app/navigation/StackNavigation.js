import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';

/* IMPORT THE ACTUAL SCREENS HERE
import MapScreenContainer from '../containers/MapScreenContainer';
import AllFeatures from '../containers/AllFeatures';
import AllProjects from '../containers/AllProjects';
import MapSelectorContainer from '../containers/MapSelectorContainer';
import EditProjectContainer from '../containers/EditProjectContainer';
import EditFeatureContainer from '../containers/EditFeatureContainer';

*/
import SplashScreen from '../screens/SplashScreen';


export default createStackNavigator({
    /* EXPORT THE ACTUAL SCREENS HERE
    MapScreen: { screen: MapScreenContainer },
    AllFeatures: {screen: AllFeatures },
    AllProjects: {screen: AllProjects},
    MapSelectorContainer: {screen: MapSelectorContainer},
    EditProjectContainer: {screen: EditProjectContainer},
    EditFeatureContainer: {screen: EditFeatureContainer}
    */
   SplashScreen: {screen: SplashScreen}
},
{
    headerMode: 'none',
});
