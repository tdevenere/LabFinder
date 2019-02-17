import React, { Component } from 'react';
import {Text, TouchableOpacity, View, Image, FlatList} from 'react-native';
import { Icon, Divider, Button, } from 'react-native-elements';
import styles from './styles.js';
import colors from '../../assets/colors.js';
const images = require("../../assets/images");

import {Collapse, CollapseBody, CollapseHeader} from 'accordion-collapse-react-native';

const LabListItem = (props) => {
    const lab = props.lab;

    numImages = 0;
    labImages = []
    for(i = 0; i < lab.os.length; i++){
        image = images.default.find((cachedImage) =>{
            return cachedImage.name == lab.os[i]
        });
        labImages.push(image.image);
    }
    imageComponents = labImages.map(image => {
        return(
            <Image style={styles.avatarStyle} source={image} />
        );
    })
    var numBlank = 3 - imageComponents.length;
    for(var i = 3 - numBlank; i < 3; i++){
        imageComponents.push(
            <Image source={null}/>
        )
    }

    var header = (
        <View>
            <View style={styles.contentContainer} >
                <View style={styles.topContainer}>
                    
                        
                    <View style={styles.topLeftContainer}>
                            <Text style={styles.nameText}>{lab.formal_name}</Text>
                            <Text style={styles.normalText}>{lab.type}</Text>
                    </View>
                       
                    <View style={styles.topRightContainer}>
                        
                        
                    </View>
                        
                </View>
                    <View style={styles.btmContainer}>
                        <View style={styles.leftContainer}>
                            {imageComponents[0]}
                            {imageComponents[1]}
                            {imageComponents[2]}
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.textRow}><Text style={styles.subHeader}>Seats: </Text><Text style={styles.normalText}>{lab.max_capacity}</Text></Text>       
                        </View>
                    </View>
            </View>
            <Divider style={styles.divider} />
        </View>
    );


    
    keyExtractor = (item, index) => index.toString();

    renderTime = ({item}) => {
        return(
            <Text style={styles.normalText}>{time.start} - {times.end}</Text>
        );
    }

    renderDate = ({item}) => {
        return(
            <View style={styles.scheduleDateContainer}>
                <Text style={styles.subHeader}>{item.date}: </Text>
            
                <View style={styles.scheduleTimeContainer}>
                    <FlatList
                        data={item.times}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderTime} />
                </View>
            </View>

        );
        
    }

    var scheduleContent = (
        <View>
            <View style={styles.contentContainer} >
                <View style={styles.topContainer}>
                    <View style={styles.topLeftContainer}>
                        <Text style={styles.subHeader}>Reservations:</Text>
                    </View>
                       
                    <View style={styles.topRightContainer}>  
                    </View>
                        
                </View>
                    <View style={styles.btmContainer}>
                        <FlatList 
                            data={lab.reservations}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderDate} />
                    </View>
            </View>
            <Divider style={styles.divider} />
        </View>
    );

    return(
        <View>
        <Collapse>
            <CollapseHeader>
                {header}
            </CollapseHeader>
            <CollapseBody>
                {scheduleContent}
            </CollapseBody>
        </Collapse>
        </View>
    );
}

export default LabListItem;