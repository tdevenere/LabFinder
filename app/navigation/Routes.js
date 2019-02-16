import React, { Component } from 'react';

import { createDrawerNavigator, StackNavigator } from 'react-navigation';

import StackNavigation from './StackNavigation';
import SideMenu from '../screens/SideMenu';


export default createDrawerNavigator({
    Options: { screen: StackNavigation },
},
{
    contentComponent: SideMenu,
    drawerWidth: 300,
    headerMode: 'none',
});
