import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Router from './Routes';

export default class Drawer extends Component {
  render () {
    return (
      <Router/>
      /*TODO save user's location when returning to the map*/
    );
  }
}
