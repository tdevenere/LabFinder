import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Text, 
    Alert
} from 'react-native';
import { Button, Icon, SearchBar, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Mapbox from '@mapbox/react-native-mapbox-gl';

import config from '../config';
import colors from '../assets/colors'

const accessToken = config.mapboxAccessToken;
Mapbox.setAccessToken(accessToken);


class MapScreen extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }


    // This will run as soon as the map screen loads.
    // Currently calls the getUserLocation method to update state.
    componentDidMount(){
        this.props.getUserLocation();
        this.centerMapOnUser();
    }

    // Center the map on the user's posistion and update the currentCenter attribute.
    centerMapOnUser = () => {
        this.setState({
            currentCenter: {latitude: this.props.userLocation[1], longitude: this.props.userLocation[0]}
        });
        this._map.setCamera({
            centerCoordinate: [this.state.currentCenter.longitude, this.state.currentCenter.latitude]
        })
    }

    

    render(opts){
        return(
            <View style={styles.container}>
                <Text>Map Screen</Text>
            </View>
        );
    }
}

// Screen Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        top: 55,
        left: 15,
        padding:0,
        margin: 0,
        borderRadius: 4,
    },
    mapMode: {
        left: 145,
        fontWeight: 'bold',
        fontSize: 20,
        top: 45,
        position: 'absolute',
    },
    geoCoderStyle:{
        justifyContent: 'center',
        zIndex:5
    },
    searchResult: {
        backgroundColor: colors.white, 
        flex: 0,
        flexGrow: 1, 
    },
    searchResultItem: {
        backgroundColor: colors.white,
        margin: 5,
    },
    searchResultText:{
        padding: 3,
        fontSize: 18
    },
    divider: {
        backgroundColor: colors.mediumGrey
    },
    
});


// State is coming from the reducer
function mapStateToProps(state){
    return{
        userLocation: state.userLocation,
    }
}

export default connect(mapStateToProps)(MapScreen);
