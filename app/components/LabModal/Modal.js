import React, { Component } from 'react';
import {Text, TouchableOpacity, View, Image, FlatList, ScrollView} from 'react-native';
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
            <View style={styles.modalContent}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <FlatList   
                        data={props.labs} 
                        keyExtractor={this.keyExtractor}
                        renderItem={({item}) => <LabListItem lab={item}/> } />
                </ScrollView>
            </View>
        </Modal>
    );
}

export default LabModal;