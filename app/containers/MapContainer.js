import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions'
import MapScreen from '../screens/MapScreen.js';

class MapScreenContainer extends Component {

    render() {
      return (
        <MapScreen {...this.props} />
      );
    }
}

function mapDispatchToProps(dispach){
    return bindActionCreators(ActionCreators, dispach);
}

export default connect((state) => { return {} }, mapDispatchToProps)(MapScreenContainer);
