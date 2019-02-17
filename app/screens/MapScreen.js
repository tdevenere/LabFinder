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
import LabModal from '../components/LabModal'

this.accessToken = config.mapboxAccessToken;
Mapbox.setAccessToken(this.accessToken);
const hasLabIcon = require('../assets/images/computer.png')

class MapScreen extends Component{
    constructor(props){
        super(props)

        this.state = {
            buildings: this.getBuildings(building_coords),
            showLabModal: false,
        }
    }

    onBuildingPress = () => {
        console.log("here")
        this.setState({
            showLabModal: true,
        });
    } 

    closeLabModal = () => {
        this.setState({
            showLabModal: false,
        })
    }

    renderBuildings(buildings) {
        return buildings.map(building => (
            <Mapbox.ShapeSource key={building.name} id={building.name} shape={building.point}  onPress={this.onBuildingPress}>
                <Mapbox.SymbolLayer id={building.name} style={{iconSize: 0.4, iconImage: hasLabIcon}} />
            </Mapbox.ShapeSource>
        ));
    }

    getBuildings(building_coords) {
        buildings = []
        for(var i=0; i<building_coords.length; i++) {
            buildings.push(this.getBuilding(building_coords[i]));
        }
        return buildings;
    }

    getBuilding(bc) {
        return ({
            name: bc.name,
            point: this.extractPoint(bc.center),
            labs: [],
            icon: null,
        });
    }   

    extractPoint(coords) {
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
                { this.state.buildings != null && this.renderBuildings(this.state.buildings)}
                <LabModal
                    modalVisible={this.state.showLabModal}
                    onRequestClose={this.closeLabModal}/>
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
});


// State is coming from the reducer
function mapStateToProps(state){
    return{
        userLocation: state.userLocation,
    }
}

export default connect(mapStateToProps)(MapScreen);
