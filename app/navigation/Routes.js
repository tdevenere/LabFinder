import React, { Component } from 'react';

import { createDrawerNavigator, StackNavigator, createAppContainer } from 'react-navigation';

import StackNavigation from './StackNavigation';
import PrimaryContainer from '..containers/P'


const stack = createDrawerNavigator({
    Options: { screen: StackNavigation },
},
{
    contentComponent: SideMenu,
    drawerWidth: 300,
    headerMode: 'none',
});

export default createAppContainer(stack);
