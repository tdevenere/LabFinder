import React, { Component } from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import { Icon, Divider, Button, } from 'react-native-elements';
import styles from './styles.js';
import colors from '../../assets/colors.js';
const images = require("../../assets/images");
const LabListItem = (props) => {
    const lab = props.lab;

    numImages = 0;
    labImages = []
    for(i = 0; i <lab.os.length(); i++){
        image = images.default.find((cachedImage) =>{
            return cachedImage.name == lab.os[i]
        });
        labImages.push(image.image);
    }


    return(
        <View>
            <View style={styles.contentContainer} >
                <View style={styles.topContainer}>
                    
                        
                    <View style={styles.topLeftContainer}>
                    <TouchableOpacity 
                        onPress={() => {props.openProject(project)}} >
                            <Text style={styles.nameText}>{lab.formal_name}</Text>
                            <Text style={styles.normalText}>{lab.type}</Text>
                        </TouchableOpacity> 
                    </View>
                       
                    <View style={styles.topRightContainer}>
                        <Menu>
                        <MenuTrigger>
                                <Icon
                                    name='dots-vertical'
                                    type='material-community' />
                            </MenuTrigger> 
                            <MenuOptions>
                                { ! project.downloaded &&
                                    <MenuOption onSelect={() => {props.downloadMap(project)}} text='Download' />
                                }
                                {   project.downloaded &&
                                    <MenuOption onSelect={() => {props.removeMapCache(project)}} text='Free Space' />
                                }
                                
                                <MenuOption onSelect={() => {props.editProject(project)}} text='Edit' />
                                <MenuOption onSelect={() => {props.deleteProject(project)}} text='Delete' />
                            </MenuOptions>
                        </Menu>
                        
                    </View>
                        
                </View>
                <TouchableOpacity 
                        onPress={() => {props.openProject(project)}} >
                    <View style={styles.btmContainer}>
                        <View style={styles.leftContainer}>
                            <Image style={styles.avatarStyle} source={mapImage.image} />
                            <View style={styles.downloadIcon} >
                                {project.downloaded &&
                                <Icon 
                                    name='arrow-down-bold-circle-outline'
                                    type='material-community'
                                    color={colors.green} />
                                }
                            </View>
                            
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.textRow}><Text style={styles.subHeader}>Location: </Text><Text style={styles.normalText}>{project.location}</Text></Text>

                            <Text style={styles.textRow}><Text style={styles.subHeader}>Description: </Text><Text style={styles.normalText}>{project.description}</Text></Text>

                            <Text style={styles.textRow}><Text style={styles.subHeader}>Client: </Text><Text style={styles.normalText}>{project.client} - {project.clientContact}</Text></Text>

                            {customFields}       
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <Divider style={styles.divider} />
        </View>
    );
}

export default LabListItem;