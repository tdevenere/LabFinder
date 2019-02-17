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

import colors from '../assets/colors'

import * as xmlParser from '../lib/xmlParser';
import LabListItem from '../components/LabListItem';
import Header from '../components/Header';




class SearchScreen extends Component{ 
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    logLabs = () =>{
        xmlParser.parseLabs();        
    }

    dummy = [
        {
            space_name: 'CF 420',
            formal_name: 'Communications Facility 420',
            max_capacity: '20',
            type: 'Computer Science',
            os: ['Linux', 'Windows'],
            reservations: [{
                date: '2/14/19',
                times: [
                    {start: '11:00:00', end: '11:50:00'},
                    {start: '13:00:00', end: '14:50:00'}
                ]
            }]
        },
        {
            space_name: 'CF 120',
            formal_name: 'Communications Facility 120',
            max_capacity: '20',
            type: 'ATUS/General',
            os: ['Mac'],
            reservations: []
        }
        
    ]

    keyExtractor = (item, index) => index.toString();

    render(opts){
        return(
            <View style={styles.container}>
                <Header
                    onRequestOpen={this.showFilter}
                    onRequestClose={this.hideFilter}
                    modalVisible={this.state.filterVisible}
                />
                <FlatList
                    data={dummy}
                    keyExtractor={this.keyExtractor}
                    renderItem={({item}) => <LabListItem lab={item}/> } />
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

export default connect(mapStateToProps)(SearchScreen);
