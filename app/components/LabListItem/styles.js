import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
    contentContainer: {
        flexDirection: 'column',
        marginTop: 10, 
        backgroundColor: colors.white,
    },
    topContainer: {
        flexDirection: 'row',
    },
    topLeftContainer: {
        flex: 9,
    },
    topRightContainer: {
        flex: 1
    },
    btmContainer: {
        marginTop: 10,
        flexDirection: 'row'
    },
    leftContainer:{
        flexDirection: 'row',
        flex: 3,
        marginTop: 3,
    },
    rightContainer: {
        flexDirection: 'column',
        flex: 7,
        marginRight: 5,
    },
    scheduleContainer:{
        flexDirection: 'column'
    },
    scheduleDateContainer: {
        flex: 3, 
        marginLeft: 5
    },
    scheduleTimeContainer: {
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5
    } , 
    divider: {
        marginTop: 5,
        backgroundColor: colors.white
    },
    nameText: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: colors.black, 
        
    },
    subHeader: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    normalText: {
        fontSize: 15
    },
    textRow: {
        marginTop: 3,
    },
    avatarStyle: {
        height: 30, 
        width: 30,
    },
    downloadIcon: {
        marginTop: 10, 
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    }

})