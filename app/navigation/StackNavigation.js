import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';
import PrimaryContainer from '../containers/PrimaryContainer';
import SplashScreen from '../screens/SplashScreen';


export default createStackNavigator({

   PrimaryContainer: {screen: PrimaryContainer},
},
{
    headerMode: 'none',
});
