import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Text, 
    Alert,
} from 'react-native';
import { Button, Icon, SearchBar, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import Mapbox from '@mapbox/react-native-mapbox-gl';

import config from '../config';
import colors from '../assets/colors'
import building_coords from '../assets/data/building_coords'

this.accessToken = config.mapboxAccessToken;
Mapbox.setAccessToken(this.accessToken);
const hasLabIcon = require('../assets/images/computer.png')

class MapScreen extends Component{
    constructor(props){
        super(props)

        this.state = {
            buildings: getBuildings(building_coords),
        }
    }

    render(opts){
        return(
            <View style={styles.container}>
            {<Mapbox.MapView
                styleURL={Mapbox.StyleURL.Street}
                zoomLevel={16}
                minZoomLevel={13.5}
                centerCoordinate={[-122.48567828113772, 48.73386737906691]}
                style={styles.container}
                onPress={() => {}}
            >
                { this.state.buildings != null && renderBuildings(this.state.buildings)}
            </Mapbox.MapView> }
          </View>
        );
    }
}

function renderBuildings(buildings) {
    return buildings.map(building => (
        <Mapbox.ShapeSource key={building.name} id={building.name} shape={building.point}  onPress={onBuildingPress}>
            <Mapbox.SymbolLayer id={building.name} style={{iconSize: 0.4, iconImage: hasLabIcon}} />
        </Mapbox.ShapeSource>
    ));
}

var onBuildingPress = (e) => {
    console.log("YOU TOUCHED ME")
} 

function getBuildings(building_coords) {
    buildings = []
    for(var i=0; i<building_coords.length; i++) {
        buildings.push(getBuilding(building_coords[i]));
    }
    return buildings;
}

function getBuilding(bc) {
    return ({
        name: bc.name,
        point: extractPoint(bc.center),
        labs: [],
        icon: null,
    });
}   

function extractPoint(coords) {
    return ({
        "shape": "point",
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": coords
        },
    });
}

// Screen Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});


// State is coming from the reducer
function mapStateToProps(state){
    return{
        userLocation: state.userLocation,
    }
}

export default connect(mapStateToProps)(MapScreen);
