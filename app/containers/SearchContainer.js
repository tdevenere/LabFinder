import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions'
import SearchScreen from '../screens/SearchScreen.js';

class SearchScreenContainer extends Component {

    render() {
      return (
        <SearchScreen {...this.props} />
      );
    }
}

function mapDispatchToProps(dispach){
    return bindActionCreators(ActionCreators, dispach);
}

export default connect((state) => { return {} }, mapDispatchToProps)(SearchScreenContainer);
