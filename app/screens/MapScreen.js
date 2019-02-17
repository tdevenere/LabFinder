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
import Mapbox from '@mapbox/react-native-mapbox-gl';

import config from '../config';
import colors from '../assets/colors'
import building_coords from '../assets/data/building_coords'

this.accessToken = config.mapboxAccessToken;
Mapbox.setAccessToken(this.accessToken);

class MapScreen extends Component{
    constructor(props){
        console.log("A")
        super(props)

        this.state = {
            buildings: building_coords
        }
    }

    render(opts){
        console.log("C")
        return(
            <View style={styles.container}>
            {<Mapbox.MapView
                styleURL={Mapbox.StyleURL.Street}
                zoomLevel={16}
                minZoomLevel={13.5}
                centerCoordinate={[-122.48567828113772, 48.73386737906691]}
                style={styles.container}>
            </Mapbox.MapView> }
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
