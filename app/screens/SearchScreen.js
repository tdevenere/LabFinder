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




class SearchScreen extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    logLabs = () =>{
        xmlParser.parseLabs();
        console.log('LAAAAAAAAABBBBBBBS: ', xmlParser.parseLabs());
        
    }
    render(opts){
        return(
            <View style={styles.container}>
                <Text>Search Screen</Text>
                <Button title="Parse XML"
                onPress = {this.logLabs()} />
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
