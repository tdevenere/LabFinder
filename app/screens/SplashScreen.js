import React, { Component } from 'react';
import { NavigationActions, DrawerActions } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';


class SplashScreen extends Component{

    render() {
        return(
            <View style={styles.containter}>
                <Text style={styles.text}>This is the loading screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default SplashScreen;