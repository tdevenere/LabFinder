import React, { Component } from 'react';
import {Text, TouchableOpacity, View, Image, FlatList} from 'react-native';
import { Icon, Divider, Button, } from 'react-native-elements';
import styles from './styles.js';
import Modal from 'react-native-modal';

import LabListItem from '../LabListItem/LabListItem.js';

const LabModal = (props) => {
    keyExtractor = (item, index) => index.toString();

    return(
        <Modal
            isVisible={props.modalVisible}
            onSwipe={() => {props.onRequestClose()}}
            onBackButtonPress={() => {props.onRequestClose()}}
            onBackdropPress={() => {props.onRequestClose()}} 
        >
            <Text style={styles.headerText}>THIS IS TEST TEXT</Text>
            <FlatList   
                data={props.labs} 
                keyExtractor={this.keyExtractor}
                renderItem={({item}) => <LabListItem lab={item}/> } />
        </Modal>
    );
}

export default LabModal;