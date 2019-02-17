import { StyleSheet } from 'react-native';
import colors from '../../assets/colors'

export default StyleSheet.create({
  headerContainer: {
      backgroundColor: colors.primaryBlue,
      flexDirection: 'row',
      alignItems: 'center', 
    },
    headline: {
      textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 0,
          color :colors.lightGrey,
          width: '75%',
    },
    
          selectedProjectContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      selectedProjectName: {
        fontSize: 20,
            color: colors.lightGrey,
      },
})
