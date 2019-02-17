import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
    contentContainer: {
        flexDirection: 'column',
        marginTop: 10
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
        flexDirection: 'column',
        flex: 3,
        marginTop: 3,
    },
    rightContainer: {
        flexDirection: 'column',
        flex: 7,
        marginRight: 5,
    },    
    divider: {
        marginTop: 5,
        backgroundColor: colors.mediumGrey
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
        height: 90, 
        width: 90,
    },
    downloadIcon: {
        marginTop: 10, 
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    }

})