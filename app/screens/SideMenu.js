import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions, DrawerActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render () {
      return (
          <View style={styles.container}>
            <ScrollView>
            <View style={styles.hamburger}>
                <Icon
				name='menu'
			 	size={40}
				color='#005580'
				onPress={() => {this.props.navigation.dispatch(DrawerActions.toggleDrawer())}} />
            </View>
            <View>
                <Text
                    style={styles.navItemStyle}
                    onPress={this.navigateToScreen('MapScreen')}>
                    Map Screen
                </Text>
            </View>
            <View>
                <Text
                    style={styles.navItemStyle}
                    onPress={this.navigateToScreen('AllFeatures')} >
                    Features
                </Text>
            </View>
            <View>
                <Text
                    style={styles.navItemStyle}
                    onPress={this.navigateToScreen('AllProjects')} >
                    Projects
                </Text>
            </View>
            
        </ScrollView>
      </View>
    );
  }
}


SideMenu.propTypes = {
  navigation: PropTypes.object
};

changeScreen = (name) => {
    this.navigateToScreen(name);
    this.setState({
        selectedProjectName: name
    });
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 18,
  },
  hamburger: {
      paddingLeft: 8,
      width: 100,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
  }
});

export default SideMenu;
