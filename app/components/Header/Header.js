import React, { Component } from 'react';

import {
	Image,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

import { Icon } from 'react-native-elements';

import styles from './styles.js';

const Header = (props) => {
	return (
		<View style={styles.headerContainer} >
			<Text style={styles.headline}>TEST HEADER TEXT</Text>
		</View>
	);
};

export default Header;
