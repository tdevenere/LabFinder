import React, { Component } from 'react';
import colors from '../../assets/colors'

import {
	Image,
	Text,
	TouchableOpacity,
	View,
	Alert,
} from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import DropdownMenu from 'react-native-dropdown-menu';
import styles from './styles.js';

const types  = [["All","Computer Science", "ATUS/General"]];
const opSystems = ["Linux", "Windows", "Mac"];

const Header = (props) => {
	keyExtractor = (item, index) => index.toString();
	/*
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
	*/

	renderTypeFilter = () => {
		return(
			<DropdownMenu
				style={{flex: 1}}
				bgColor={'white'}
				tintColor={'#666666'}
				activityTintColor={'green'}
				handler={(selection, row) => {console.log(types[selection][row])}}
				data={types}
			></DropdownMenu>
		)
	}

	return (
		<View style={styles.headerContainer} >
			<Text style={styles.headerText}>Map View</Text>
			<Modal
				isVisible={props.modalVisible}
				onSwipe={() => {props.onRequestClose()}}
				onBackButtonPress={() => {props.onRequestClose()}}
				onBackdropPress={() => {props.onRequestClose()}} 
			>
				<Text style={styles.headerText}>THIS IS TEST TEXT</Text>
				<View style={styles.modalContent}>
					{props.modalVisible && this.renderTypeFilter()}
					{props.modalVisible && this.renderOSFilter()}
				</View>
        	</Modal>
			<Button
				buttonStyle={styles.buttonStyle}
				raised={true}
				title='Filter'
				onPress={() => {props.onRequestOpen()}} />
		</View>
		
	);
};

export default Header;
