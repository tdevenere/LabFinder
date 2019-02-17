import React, { Component } from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import { Icon, Divider, Button, } from 'react-native-elements';
import styles from './styles.js';
import Modal from 'react-native-modal';



const LabModal = (props) => {
    return(
        <Modal
            isVisible={props.modalVisible}
            onSwipe={() => {props.onRequestClose()}}
            onBackButtonPress={() => {props.onRequestClose()}}
            onBackdropPress={() => {props.onRequestClose()}} >
            <View style={styles.header} >
                    <Text style={styles.headerText}>Map Tools</Text>
            </View>
        </Modal>

    );
}

export default LabModal;